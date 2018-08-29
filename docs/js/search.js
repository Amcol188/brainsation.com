var lunrIndex, $results, pagesIndex;
 
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
 
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
 
            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }
 
    var searchTerm = getQueryVariable('query');
 
    // Initialize lunrjs using our generated index file
    function initLunr() {
        // First retrieve the index file
        $.getJSON("/index.json")
            .done(function(index) {
                pagesIndex = index;
                console.log("index:", pagesIndex);
                lunrIndex = lunr(function() {
                    this.field("title", { boost: 10 });
                    this.field("tags", { boost: 5 });
                    this.field("image");
                    this.field("content");
                    this.ref("uri");
 
                    pagesIndex.forEach(function (page) {
                        this.add(page)
                    }, this)
                });
            })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.error("Error getting Hugo index flie:", err);
            });
    }
 
    // Nothing crazy here, just hook up a listener on the input field
    function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn
        }
    }
    function initUI() {

        $news = $("main.main");
        $results = $("main.results");
        $results.hide()
        $("#search").keyup(function() {
            $news.hide()
            $results.show()
            
            // Only trigger a search when 2 chars. at least have been provided
            var query = $(this).val();
            if (query.length < 2) {
                $news.show()
                $results.hide()
                $news.removeClass('search')
                return;
            } else{
                $results.empty();
                $news.addClass('search')
            }
 
            var results = search(query);
 
            renderResults(results);
        });
    }
 
    /**
     * Trigger a search in lunr and transform the result
     *
     * @param  {String} query
     * @return {Array}  results
     */
    function search(query) {
        return lunrIndex.search(query).map(function(result) {
                return pagesIndex.filter(function(page) {
                    return page.uri === result.ref;
                })[0];
            });
    }
 
    /**
     * Display the 10 first results
     *
     * @param  {Array} results to display
     */
    function renderResults(results) {
        if (!results.length) {
            return;
        }
        $wrapblock = $('<div class="content"><div class="container"><div class="content-block"><div class="news-list"><div class="grid search-grid"></div></div></div></div></div>');
        $('main.results').append($wrapblock);
        // Only show the ten first results
        results.slice(0, 100).forEach(function(result) {

            var $result = $('<div class="post">');
            var $result_article = $('<article class="post-entry">');
            var $result_image = $('<a class="image">');
            var $result_info = $('<div class="post-info"><h3>');

            $result.append($result_article.append($result_image),$result_article.append($result_info));
            // $result.append($result_image);



            $result_info.find('h3').append($("<a>", {
                href: result.uri,
                text: result.title
            }));
            $result_image.css('background', 'url(' + result.image + ') no-repeat 50% 50% / cover ')

            $('.search-grid').append($result);
        });
    }
 
    // Let's get started
    initLunr();
 
    $(document).ready(function() {
        initUI();
    });