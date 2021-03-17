const dropRequestMenu = document.getElementById ('dropdowncontent01');
const btnRequest = document.getElementById ('btnrequestmenu');
btnRequest.onclick = function() {
      dropRequestMenu.classList.toggle('open')
      btnRequest.classList.toggle('open')
};
//$('.dropdownselect')

$('#profession01').each(function(){
		// Variables
		let $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 1;

		$('#profession01').hide();
		// Wrap all in select box
		$('#profession01').wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: 'Должность',
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

$('#profession00').each(function(){
  		// Variables
  		let $this = $(this),
  			selectOption = $this.find('option'),
  			selectOptionLength = selectOption.length,
  			selectedOption = selectOption.filter(':selected'),
  			dur = 1;

  		$('#profession00').hide();
  		// Wrap all in select box
  		$('#profession00').wrap('<div class="select"></div>');
  		// Style box
  		$('<div>',{
  			class: 'select__gap',
  			text: 'Няня',
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

$('#schedule00').each(function(){
      		// Variables
      		let $this = $(this),
      			selectOption = $this.find('option'),
      			selectOptionLength = selectOption.length,
      			selectedOption = selectOption.filter(':selected'),
      			dur = 1;

      		$('#schedule00').hide();
      		// Wrap all in select box
      		$('#schedule00').wrap('<div class="select"></div>');
      		// Style box
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
