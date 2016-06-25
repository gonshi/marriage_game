const COLUMN_HORIZONTAL_NUM = 5;
const COLUMN_VERTICAL_NUM = 4;
const IMAGE_NUM = 20;
const WAIT = 500;

class Main{
    constructor(){
        this.$win = $(window);
        this.$wrapper = $('.wrapper');
        this.$visited = $('.visited');
        this.$visited_inner = $('.visited__inner');
        this.$modal = $('.modal');
        this.$modal_inner = $('.modal__inner');

        this.column_width = this.$win.height() / COLUMN_HORIZONTAL_NUM;
        this.column_height = this.$win.width() / COLUMN_VERTICAL_NUM;
    }

    init(){
        this.$visited_inner.css({
            width: this.$win.height() / COLUMN_HORIZONTAL_NUM,
            height: this.$win.width() / COLUMN_VERTICAL_NUM 
        });

        this.$wrapper.on('click', (e) => {
            const column_left = Math.floor(e.clientY / this.column_width);
            const column_top = Math.floor((this.$win.width() - e.clientX) / this.column_height);

            this.showResult(column_top * COLUMN_HORIZONTAL_NUM + column_left + 1);
        });

        this.$modal.on('click', (e) => {
            this.closeResult();
        });
    }

    preload(){
        let open_image = []; 
        let visited_image = []; 

        for(let i = 0; i < IMAGE_NUM; i++){
            open_image[i] = new Image();
            visited_image[i] = new Image();

            open_image[i].src = `img/open/${i + 1}.jpg`;
            visited_image[i].src = `img/visited/${i + 1}.jpg`;
        }
    }

    showResult(image_i){
        this.$modal.addClass('is-show');
        this.$modal_inner.css({
            backgroundImage: `url(img/open/${image_i}.jpg)`
        });

        setTimeout(() => {
            this.$visited_inner.eq(image_i - 1).css({
                backgroundImage: `url(img/visited/${image_i}.jpg)`
            });
        }, WAIT); 
    }

    closeResult(){
        this.$modal.removeClass('is-show');
    }
}
var main = new Main();
main.preload();
main.init();
