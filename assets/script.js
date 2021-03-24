const dropRequestMenu = document.getElementById ('dropdowncontent01');
const btnRequest = document.getElementById ('btnrequestmenu');
btnRequest.onclick = function() {
      dropRequestMenu.classList.toggle('open')
      btnRequest.classList.toggle('open')
};
//$('.dropdownselect')

$('#profession01').each(function(){
		// Переменные
		let $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 1;

		$('#profession01').hide();
		$('#profession01').wrap('<div class="select"></div>');
		// Стиль
		$('<div>',{
			class: 'select__gap',
			text: 'Должность',
		}).
    insertAfter($this);

		let selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Добавить ul который будет стилизоваться
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);

		let selectList = selectGap.next('.select__list');
		// Добавить элемент li
		for(let i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Найти элементы
		let selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);
        // Поместить выбранный элемент в поле ввода
				selectItem.on('click', function(){
					let chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});

			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});

	});

$('#profession00').each(function(){

  		let $this = $(this),
  			selectOption = $this.find('option'),
  			selectOptionLength = selectOption.length,
  			selectedOption = selectOption.filter(':selected'),
  			dur = 1;

  		$('#profession00').hide();

  		$('#profession00').wrap('<div class="select"></div>');

  		$('<div>',{
  			class: 'select__gap',
  			text: 'Няня',
  		}).
      insertAfter($this);

  		let selectGap = $this.next('.select__gap'),
  			caret = selectGap.find('.caret');

  		$('<ul>',{
  			class: 'select__list'
  		}).insertAfter(selectGap);

  		let selectList = selectGap.next('.select__list');

  		for(let i = 0; i < selectOptionLength; i++){
  			$('<li>',{
  				class: 'select__item',
  				html: $('<span>',{
  					text: selectOption.eq(i).text()
  				})
  			})
  			.attr('data-value', selectOption.eq(i).val())
  			.appendTo(selectList);
  		}

  		let selectItem = selectList.find('li');

  		selectList.slideUp(0);
  		selectGap.on('click', function(){
  			if(!$(this).hasClass('on')){
  				$(this).addClass('on');
  				selectList.slideDown(dur);

  				selectItem.on('click', function(){
  					let chooseItem = $(this).data('value');

  					$('select').val(chooseItem).attr('selected', 'selected');
  					selectGap.text($(this).find('span').text());

  					selectList.slideUp(dur);
  					selectGap.removeClass('on');
  				});

  			} else {
  				$(this).removeClass('on');
  				selectList.slideUp(dur);
  			}
  		});

  	});

$('#schedule00').each(function(){

      		let $this = $(this),
      			selectOption = $this.find('option'),
      			selectOptionLength = selectOption.length,
      			selectedOption = selectOption.filter(':selected'),
      			dur = 1;

      		$('#schedule00').hide();

      		$('#schedule00').wrap('<div class="select"></div>');

      		$('<div>',{
      			class: 'select__gap',
      			text: 'График работы',
      		}).
          insertAfter($this);

      		let selectGap = $this.next('.select__gap'),
      			caret = selectGap.find('.caret');
      		// Add ul list
      		$('<ul>',{
      			class: 'select__list'
      		}).insertAfter(selectGap);

      		let selectList = selectGap.next('.select__list');
      		// Добавить элемент li
      		for(let i = 0; i < selectOptionLength; i++){
      			$('<li>',{
      				class: 'select__item',
      				html: $('<span>',{
      					text: selectOption.eq(i).text()
      				})
      			})
      			.attr('data-value', selectOption.eq(i).val())
      			.appendTo(selectList);
      		}
      		// Найти элементы
      		let selectItem = selectList.find('li');

      		selectList.slideUp(0);
      		selectGap.on('click', function(){
      			if(!$(this).hasClass('on')){
      				$(this).addClass('on');
      				selectList.slideDown(dur);

      				selectItem.on('click', function(){
      					let chooseItem = $(this).data('value');

      					$('select').val(chooseItem).attr('selected', 'selected');
      					selectGap.text($(this).find('span').text());

      					selectList.slideUp(dur);
      					selectGap.removeClass('on');
      				});

      			} else {
      				$(this).removeClass('on');
      				selectList.slideUp(dur);
      			}
      		});

      	});

const dropSendCvMenu = document.getElementById ('dropdowncontent02');
const btnSendCv = document.getElementById ('btnsendcvmenu');
btnSendCv.onclick = function() {
      dropSendCvMenu.classList.toggle('open')
      btnSendCv.classList.toggle('open')
};

const menuItem = document.getElementById ('searchforpersonnel');
let mainMenuDropItems = document.getElementById ('MenuDropItems');
menuItem.onclick = function() {
      mainMenuDropItems.classList.toggle('open')
};

// Слайдер
// Переменные
let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let slideInterval = 10000;
let navBtnId = 0;
let translateWidth = 0;
// При запуске документа запускается функция
$(document).ready(function() {
    let switchInterval = setInterval(nextSlide, slideInterval);
// Автопрокрутка
    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
// Невидимая кнопка "next"
    $('#next-btn').click(function() {
        nextSlide();
    });
// Невидимая кнопка "previous"
    $('#prev-btn').click(function() {
        prevSlide();
    });
// При клике на кнопку
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});

// Функция следующей кнопки
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}
// Функция предыдущей кнопки
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
