var ttt = {"guidelineId":120,"evalItemId":"teacherId","answers":{"prob11":"A","prob12":"A","prob13":"N","prob14":"A","prob15":"A","prob21":"A","prob22":"A","prob23":"A","prob31":"A","prob32":"A","prob33":"A","prob41":"A","prob42":"A","prob43":"A","prob51":"A","prob52":"A","sat6":"A","mulsel71":"K","advice72":"","prob73":"Y"}}

function doScaledTimeout(i, e) {
  setTimeout(function() {
    hhh(e)
  }, i * 1200);
}

function hhh(e) {
	console.log(e)
	e.click()
}

var dt = 0

for (var i in ttt.answers) {
	var es = document.getElementsByName(i);
	for (var j = 0; j < es.length; j++) {
		if (es[j].value == ttt.answers[i]) {
			var e = es[j]
			doScaledTimeout(dt, e)
			dt++;
        }
    }
}

setTimeout(function(){
	document.getElementById("dijit_form_Button_0").click()
}, dt*1200)
