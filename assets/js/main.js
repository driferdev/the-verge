const handleMenuClick = () => {
    const sideBar = $('#side-bar');
    const contentContainer = $('#content-container');
    const windowsFullWidth = window.outerWidth;
    const currenSideBarLeft = sideBar.css('left');

    let newLeft = '';
    let newContainerWidth = '';
    let newContainerMarginLeft = '';

    // lets hide the menu
    if(['12px', '0px'].includes(currenSideBarLeft)) {
        newLeft = '-300px';
        newContainerWidth = '100%';
        newContainerMarginLeft = 0;
    // lets show the menu    
    } else if(currenSideBarLeft == '-300px') {
        newLeft = windowsFullWidth > 768 ? '12px' : '0px';
        const contentParentWidth = contentContainer.parent().outerWidth();
        newContainerWidth =  `${contentParentWidth - 336}px`;
        newContainerMarginLeft = '312px';
    }
    sideBar.animate({ left: newLeft }, 400);
    if(windowsFullWidth > 768) {
        contentContainer.animate({
            width: newContainerWidth,
            'margin-left': newContainerMarginLeft,
            overflow: 'visible'
        }, 400);
    }
}

const handleWindowsResize = () => {
    const sideBar = $('#side-bar');
    const contentContainer = $('#content-container');
    const currenSideBarLeft = sideBar.css('left');
    const windowsFullWidth = window.outerWidth;
    const contentParentWidth = contentContainer.parent().outerWidth();
    let css = {}

    if(windowsFullWidth > 768 && currenSideBarLeft !== '-300px') {
        css = { width: `${contentParentWidth - 336}px`, 'margin-left': '312px' };
    } else {
        css = { width: '100%', 'margin-left': 0 };
    }
    contentContainer.animate(css, 400);
}

$( document ).ready(function() {
    $('#menu').click((e) => {
        handleMenuClick();
    });

    $(window).resize(() => {
        handleWindowsResize();
    })
});

