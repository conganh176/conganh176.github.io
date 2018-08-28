function playSound(hoveraudio) {
				var audio1=document.getElementById(hoveraudio);
				audio1.play();
			}

function stopSound(hoveraudio) {
				var audio1=document.getElementById(hoveraudio);
				audio1.pause();
				audio1.currentTime = 0;
			}

function play(clickaudio) {
				var audio2=document.getElementById(clickaudio);
				audio2.play();
			}

document.getElementById("playpause").onclick = function() {
					    var audio = document.getElementById("audio");
					    if (audio.paused) audio.play();
					    else audio.pause();
					};

document.getElementById("playpause2").onclick = function() {
					    var audio = document.getElementById("audio");
					    if (audio.paused) audio.play();
					    else audio.pause();
					};

