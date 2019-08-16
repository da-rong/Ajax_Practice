
		var Body = {
			setBackgroundColor:function(color)
		{
			// var target = document.querySelector('body');
			// target.style.backgroundColor=color;
			$('body').css('backgroundColor',color);
		},

			setBodyColor:function(color)
		{
			// var target = document.querySelector('body');
			// target.style.color=color;
			$('body').css('color',color);

		}
	};
	
		var Link = {
			setLinkColor:function(color)
		{
			// var alist = document.querySelectorAll('a');
			// 	var i =0;
			// 	while( i < alist.length){
			
			// 		alist[i].style.color = color;
			// 		i++;
			// 	}
			$('a').css('color',color);
		}
	};
		function dayNightHandler(self)
		{
			if(self.value ==='night')
			{
					Body.setBackgroundColor('black');
					Body.setBodyColor('white');
					self.value = 'day';
					Link.setLinkColor('powderblue');
				
			}
			else
				{
					Body.setBackgroundColor('white');
					Body.setBodyColor('black');
					self.value = 'night';
					Link.setLinkColor('orange');
				}
	}
