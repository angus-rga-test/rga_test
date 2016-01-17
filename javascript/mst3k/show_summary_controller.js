(function() {

    angular.module('mst3k').controller(
        'ShowSummaryController',
        [
            'Show',
            '$sce',
            'Exhibit',
            ShowSummaryController
        ]
    );

    /**
     * Handle the show summary page
     * @param Show
     * @param $sce
     * @param Exhibit
     * @constructor
     */
    function ShowSummaryController(
        Show,
        $sce,
        Exhibit
    ) {
        this.show = new Show();
        this.show.summaryTemplate = 'templates/mst3k_summary.html';
        this.show.exhibitHeaderTemplate = 'templates/mst3k_exhibit_header.html';
        this.show.iFrameVideoLink = $sce.trustAsResourceUrl('http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1');
        this.show.exhibits = [
            new Exhibit(
                ['Season 0','KTMA'],
                'images/exhibits/season_0_ktma.png',
                $sce.trustAsResourceUrl('http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1')
            ),
            new Exhibit(
                ['Comedy Central','The Golden Years'],
                'images/exhibits/comedy_central_the_golden_years.png',
                $sce.trustAsResourceUrl('http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1')
            ),
            new Exhibit(
                ["Sci-Fi,","Crow's Voice,","& Ram Chips"],
                'images/exhibits/crows_voice_and_ram_chips.png',
                $sce.trustAsResourceUrl('http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1')
            )
        ];

        this.exhibitionModalOpen = false;
        this.selectedExhibit = null;

        this.selectExhibit = selectExhibit;

    }

    /**
     * Mark the given exhibit as the selected exhibit
     * @param exhibit
     */
    function selectExhibit(exhibit) {
        this.selectedExhibit = exhibit;
        this.exhibitionModalOpen = true;
        console.log(this.exhibitionModalOpen);
    }

})();