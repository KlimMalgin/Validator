


var $form = $('.form');

/**
 * Создается объект-валидатор. 
 * Из validate вернется объект-валидатор настроенный в соответствии с заданными params.
 */
oValidate = new Validator(params);


oValidate

	/**
	 * Один и тот же объект валидации может работать с любым количеством форм или отдельных полей
	 */
	.form($form)
	.form($form1)
	.form($form2)


	/**
	 * И с любым количеством полей ввода
	 */
	.field($input)
	.field($input1)
	.field($input2)

	/**
	 * Обработчики успешного события на форме/поле
	 */
	//.action();

/******************************************************************************/

$.ajax({/*...*/})

	// Проверка ответа по правилам из params и возврат bool. (За что отвечает результирующий bool? За форму? За поля? За конкретное поле? Или это комплекстаня проверка?)
	.then(oValidate.serverValidate) // return true|false	<<< ?
	
    	// Проверка по правилам из params. Возврат check-функции, которая уже вернет результат на основе данных ей параметров.
    	.then(oValidate.checkGenerator)
    	.then(function (check) {
    	    check('email')  // true|false
    	    check('password')   // true|false
    	    
    	    
    	    /**
    	     * $ - означает мета обращение. т.е. состояние полей можем проверить, задав их имена явно.
    	     * А состояние ответа целиком проверить можем, только указав его мета обозначение.
    	     */
    	    check('$response')  // true|false
    	    
    	});
	
/******************************************************************************/

var rules = {
    email: function (newValue, oldValue, $field, $form) {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(newValue);
    },
    login: function (newValue, oldValue, $field, $form) {
        return /^[a-zA-Z0-9_.+-]+$/.test(newValue);
    },
    code: function (newValue, oldValue, $field, $form) {
        return /^[a-zA-Z0-9_.+-]+\-[a-zA-Z0-9_.+-]+\-[a-zA-Z0-9_.+-]+$/.test(newValue);
    }
};


oValidate
    .form($myForm)
    .rules(rules)
    .compose({
        loginEmail: [oValidate.rules.login, oValidate.rules.email.invert],
        emailCode: [oValidate.rules.email, oValidate.rules.code]
    });
	
/******************************************************************************/

oValidate.form($myForm);

var check = oValidate.checkGenerator();

if (check('email') && check('password')) {
    // На какие поля класс? Надо на конкретные поля!
    $myForm.addClass('error');
}

oValidate.check('email')    // true|false
oValidate.check('country')    // true|false

oValidate.fcheck('email').fcheck('password').call(function (state /*Общий статус: true|false*/, stateObject /*Статус каждого проверенного поля*/) { /*...*/ });

oValidate.on('keyup:email', function (newValue, oldValue, $field, $form) {
    // some code
});



