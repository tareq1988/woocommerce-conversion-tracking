(function( $ ) {
    // Data Save
    $( '#wcct-submit' ).on( 'click', function( e ) {

        if ( confirm( 'Are you sure want to save the changes ?' ) ) {
            e.preventDefault();

            wp.ajax.send( 'wcct_save_settings', {
                data: $( '#integration-form' ).serialize(),
                success: function( response ) {

                    $("#ajax-message")
                        .html('<p><strong>' + response.message + '</strong></p>')
                        .show()
                        .delay(3000)
                        .slideUp('fast');

                    $('html, body').animate({
                        scrollTop: 0
                    }, 'fast');
                },
                error: function(error) {
                    alert('something wrong happend');
                }
            });
        }

        return false;
    });

    // Toggoling the settings
    $( '.slider' ).on( 'click', function() {
        var id = $( this ).attr( 'data-id' );
        var target = $( '#setting-'+id );
        target.stop().toggle('fast');
    });

    // Default Settings
    $( '.toogle-seller:checked' ).each( function( index, value ) {
        var id =  $( value ).attr( 'data-id' );
        var target = $( '#setting-'+id );

        $( target ).css( 'display', 'block' );
    } );

    $('.event').on( 'change', function() {
        var target = $( this ).next('.event-label');
        target.addClass( 'event-label-space' );
        target.stop().toggle();

    } );

    $( '.event:checked' ).each( function( index, value ) {
        $( value ).next( '.event-label' ).addClass( 'event-label-space' );
        $( value ).next( '.event-label' ).css( 'display', 'block' );
    } );

    // Pro-Feature Message
    $( '.disabled-class' ).on( 'click', function() {
        var title =  $( this ).text();
        swal({
            title:title+' is available in Pro version',
            text:'Please upgrade to the Pro version to get all the awesome feature',
            buttons:{
                confirm:'Get the Pro Version',
                cancel:'Close',
            },
        }).then( function( is_confirm ){
            if ( is_confirm ) {
              window.open('http://www.wedevs.com', '_blank');
            }
        }, function() {});
    } );

})( jQuery );