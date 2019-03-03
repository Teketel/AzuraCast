var player,$player,volume=55,is_playing=!1;function stopAllPlayers(){player.pause(),player.src="",is_playing=!1,$(".btn-audio").each(function(){var e=$(this).removeClass("playing").find("i");e.hasClass("material-icons")&&e.text("play_circle_filled")}),$("#radio-player-controls").removeClass("jp-state-playing")}function setVolume(e){volume=parseInt(e),$(".jp-volume-bar-value").css("width",volume+"%"),$(".jp-volume-range").val(volume),player.volume=Math.min((Math.exp(volume/100)-1)/(Math.E-1),1),store.enabled&&store.set("player_volume",volume)}function playAudio(e){player.src=e,player.play().catch(function(e){console.error(e),stopAllPlayers()})}function handlePlayClick(e){if(btn=$('.btn-audio[data-url="'+e+'"]'),btn.hasClass("playing"))stopAllPlayers();else{is_playing&&stopAllPlayers(),playAudio(e);var l=btn.addClass("playing").find("i");l.hasClass("material-icons")&&l.text("pause_circle_filled")}}$(function(){if(store.enabled&&void 0!==store.get("player_volume")&&(volume=store.get("player_volume",volume)),"undefined"!=typeof URLSearchParams){var e=new URLSearchParams(window.location.search);e.has("volume")&&(volume=parseInt(e.get("volume")))}$(".btn-audio").on("click",function(e){return e.preventDefault(),handlePlayClick($(this).data("url")),!1}),player=document.createElement("audio"),$player=$(player),setVolume(volume),$player.on("play",function(e){is_playing=!0,$(".jp-unmute").hide(),$("#radio-player-controls").addClass("jp-state-playing")}),$player.on("ended",function(e){stopAllPlayers()}),"mediaSession"in navigator&&navigator.mediaSession.setActionHandler("pause",function(){stopAllPlayers()}),$(".jp-pause").on("click",function(e){stopAllPlayers()}),$(".jp-mute").on("click",function(e){setVolume(0)}),$(".jp-unmute").on("click",function(e){setVolume(55)}),$(".jp-volume-full").on("click",function(e){setVolume(100)}),$(".jp-volume-bar").on("click",function(e){var l=$(e.currentTarget),a=l.offset(),o=e.pageX-a.left,t=l.width();l.height(),e.pageY,a.top,l.height();setVolume(Math.round(o/t*100))}),$(".jp-volume-range").on("change",function(e){setVolume($(this).val())}),$('.btn-audio[data-autoplay="true"]:first').click()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbInBsYXllciIsIiRwbGF5ZXIiLCJ2b2x1bWUiLCJpc19wbGF5aW5nIiwic3RvcEFsbFBsYXllcnMiLCJwYXVzZSIsInNyYyIsIiQiLCJlYWNoIiwicGxheV9pY29uIiwidGhpcyIsInJlbW92ZUNsYXNzIiwiZmluZCIsImhhc0NsYXNzIiwidGV4dCIsInNldFZvbHVtZSIsIm5ld192b2x1bWUiLCJwYXJzZUludCIsImNzcyIsInZhbCIsIk1hdGgiLCJtaW4iLCJleHAiLCJFIiwic3RvcmUiLCJlbmFibGVkIiwic2V0IiwicGxheUF1ZGlvIiwic291cmNlX3VybCIsInBsYXkiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVBsYXlDbGljayIsImF1ZGlvX3NvdXJjZSIsImJ0biIsImFkZENsYXNzIiwidW5kZWZpbmVkIiwiZ2V0IiwiVVJMU2VhcmNoUGFyYW1zIiwidXJsUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoaWRlIiwibmF2aWdhdG9yIiwibWVkaWFTZXNzaW9uIiwic2V0QWN0aW9uSGFuZGxlciIsIiRiYXIiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0IiwieCIsInBhZ2VYIiwibGVmdCIsInciLCJ3aWR0aCIsImhlaWdodCIsInBhZ2VZIiwidG9wIiwicm91bmQiLCJjbGljayJdLCJtYXBwaW5ncyI6IkFBSUEsSUFFSUEsT0FDQUMsUUFIQUMsT0FBUyxHQUNUQyxZQUFhLEVBSWpCLFNBQVNDLGlCQUVMSixPQUFPSyxRQUNQTCxPQUFPTSxJQUFNLEdBRWJILFlBQWEsRUFFYkksRUFBRSxjQUFjQyxLQUFLLFdBQ2pCLElBQUlDLEVBQVlGLEVBQUVHLE1BQU1DLFlBQVksV0FBV0MsS0FBSyxLQUNoREgsRUFBVUksU0FBUyxtQkFDbkJKLEVBQVVLLEtBQUssd0JBSXZCUCxFQUFFLDBCQUEwQkksWUFBWSxvQkFHNUMsU0FBU0ksVUFBVUMsR0FFZmQsT0FBU2UsU0FBU0QsR0FFbEJULEVBQUUsd0JBQXdCVyxJQUFJLFFBQVNoQixPQUFPLEtBQzlDSyxFQUFFLG9CQUFvQlksSUFBSWpCLFFBRzFCRixPQUFPRSxPQUFTa0IsS0FBS0MsS0FBS0QsS0FBS0UsSUFBSXBCLE9BQU8sS0FBSyxJQUFJa0IsS0FBS0csRUFBRSxHQUFJLEdBRTFEQyxNQUFNQyxTQUNORCxNQUFNRSxJQUFJLGdCQUFpQnhCLFFBR25DLFNBQVN5QixVQUFVQyxHQUVmNUIsT0FBT00sSUFBTXNCLEVBQ2I1QixPQUFPNkIsT0FBT0MsTUFBTSxTQUFTQyxHQUN6QkMsUUFBUUQsTUFBTUEsR0FDZDNCLG1CQUlSLFNBQVM2QixnQkFBZ0JDLEdBSXJCLEdBRkFDLElBQU01QixFQUFFLHdCQUF3QjJCLEVBQWEsTUFFekNDLElBQUl0QixTQUFTLFdBQ2JULHFCQUNHLENBQ0NELFlBQ0FDLGlCQUdKdUIsVUFBVU8sR0FFVixJQUFJekIsRUFBWTBCLElBQUlDLFNBQVMsV0FBV3hCLEtBQUssS0FDekNILEVBQVVJLFNBQVMsbUJBQ25CSixFQUFVSyxLQUFLLHdCQUszQlAsRUFBRSxXQVFFLEdBTElpQixNQUFNQyxjQUEwQ1ksSUFBL0JiLE1BQU1jLElBQUksbUJBQzNCcEMsT0FBU3NCLE1BQU1jLElBQUksZ0JBQWlCcEMsU0FJVCxvQkFBcEJxQyxnQkFBaUMsQ0FDeEMsSUFBSUMsRUFBWSxJQUFJRCxnQkFBZ0JFLE9BQU9DLFNBQVNDLFFBQ2hESCxFQUFVSSxJQUFJLFlBQ2QxQyxPQUFTZSxTQUFTdUIsRUFBVUYsSUFBSSxZQUl4Qy9CLEVBQUUsY0FBY3NDLEdBQUcsUUFBUyxTQUFTQyxHQUdqQyxPQUZBQSxFQUFFQyxpQkFDRmQsZ0JBQWdCMUIsRUFBRUcsTUFBTXNDLEtBQUssU0FDdEIsSUFJWGhELE9BQVNpRCxTQUFTQyxjQUFjLFNBQ2hDakQsUUFBVU0sRUFBRVAsUUFFWmUsVUFBVWIsUUFHVkQsUUFBUTRDLEdBQUcsT0FBUSxTQUFTQyxHQUN4QjNDLFlBQWEsRUFFYkksRUFBRSxjQUFjNEMsT0FDaEI1QyxFQUFFLDBCQUEwQjZCLFNBQVMsc0JBR3pDbkMsUUFBUTRDLEdBQUcsUUFBUyxTQUFTQyxHQUN6QjFDLG1CQUdBLGlCQUFrQmdELFdBQ2xCQSxVQUFVQyxhQUFhQyxpQkFBaUIsUUFBUyxXQUM3Q2xELG1CQUtSRyxFQUFFLGFBQWFzQyxHQUFHLFFBQVMsU0FBU0MsR0FDaEMxQyxtQkFHSkcsRUFBRSxZQUFZc0MsR0FBRyxRQUFTLFNBQVNDLEdBQy9CL0IsVUFBVSxLQUdkUixFQUFFLGNBQWNzQyxHQUFHLFFBQVMsU0FBU0MsR0FDakMvQixVQUFVLE1BR2RSLEVBQUUsbUJBQW1Cc0MsR0FBRyxRQUFTLFNBQVNDLEdBQ3RDL0IsVUFBVSxPQUdkUixFQUFFLGtCQUFrQnNDLEdBQUcsUUFBUyxTQUFTQyxHQUNyQyxJQUFJUyxFQUFPaEQsRUFBRXVDLEVBQUVVLGVBQ1hDLEVBQVNGLEVBQUtFLFNBQ2RDLEVBQUlaLEVBQUVhLE1BQVFGLEVBQU9HLEtBQ3JCQyxFQUFJTixFQUFLTyxRQUNMUCxFQUFLUSxTQUFXakIsRUFBRWtCLE1BQVFQLEVBQU9RLElBQ2pDVixFQUFLUSxTQUViaEQsVUFBVUssS0FBSzhDLE1BQU9SLEVBQUVHLEVBQUssUUFHakN0RCxFQUFFLG9CQUFvQnNDLEdBQUcsU0FBVSxTQUFTQyxHQUN4Qy9CLFVBQVVSLEVBQUVHLE1BQU1TLFNBSXRCWixFQUFFLDBDQUEwQzREIiwiZmlsZSI6InJhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJhZGlvIFBsYXllciBTY3JpcHRcclxuICovXHJcblxyXG52YXIgdm9sdW1lID0gNTUsXHJcbiAgICBpc19wbGF5aW5nID0gZmFsc2UsXHJcbiAgICBwbGF5ZXIsXHJcbiAgICAkcGxheWVyO1xyXG5cclxuZnVuY3Rpb24gc3RvcEFsbFBsYXllcnMoKVxyXG57XHJcbiAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgIHBsYXllci5zcmMgPSAnJztcclxuXHJcbiAgICBpc19wbGF5aW5nID0gZmFsc2U7XHJcblxyXG4gICAgJCgnLmJ0bi1hdWRpbycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHBsYXlfaWNvbiA9ICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXlpbmcnKS5maW5kKCdpJyk7XHJcbiAgICAgICAgaWYgKHBsYXlfaWNvbi5oYXNDbGFzcygnbWF0ZXJpYWwtaWNvbnMnKSkge1xyXG4gICAgICAgICAgICBwbGF5X2ljb24udGV4dCgncGxheV9jaXJjbGVfZmlsbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3JhZGlvLXBsYXllci1jb250cm9scycpLnJlbW92ZUNsYXNzKCdqcC1zdGF0ZS1wbGF5aW5nJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZvbHVtZShuZXdfdm9sdW1lKVxyXG57XHJcbiAgICB2b2x1bWUgPSBwYXJzZUludChuZXdfdm9sdW1lKTtcclxuXHJcbiAgICAkKCcuanAtdm9sdW1lLWJhci12YWx1ZScpLmNzcygnd2lkdGgnLCB2b2x1bWUrJyUnKTtcclxuICAgICQoJy5qcC12b2x1bWUtcmFuZ2UnKS52YWwodm9sdW1lKTtcclxuXHJcbiAgICAvLyBTZXQgdm9sdW1lIGxvZ2FyaXRobWljYWxseSBiYXNlZCBvbiBvcmlnaW5hbCBpbnB1dC5cclxuICAgIHBsYXllci52b2x1bWUgPSBNYXRoLm1pbigoTWF0aC5leHAodm9sdW1lLzEwMCktMSkvKE1hdGguRS0xKSwgMSk7XHJcblxyXG4gICAgaWYgKHN0b3JlLmVuYWJsZWQpXHJcbiAgICAgICAgc3RvcmUuc2V0KCdwbGF5ZXJfdm9sdW1lJywgdm9sdW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUF1ZGlvKHNvdXJjZV91cmwpXHJcbntcclxuICAgIHBsYXllci5zcmMgPSBzb3VyY2VfdXJsO1xyXG4gICAgcGxheWVyLnBsYXkoKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGxheUNsaWNrKGF1ZGlvX3NvdXJjZSlcclxue1xyXG4gICAgYnRuID0gJCgnLmJ0bi1hdWRpb1tkYXRhLXVybD1cIicrYXVkaW9fc291cmNlKydcIl0nKTtcclxuXHJcbiAgICBpZiAoYnRuLmhhc0NsYXNzKCdwbGF5aW5nJykpIHtcclxuICAgICAgICBzdG9wQWxsUGxheWVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaXNfcGxheWluZykge1xyXG4gICAgICAgICAgICBzdG9wQWxsUGxheWVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheUF1ZGlvKGF1ZGlvX3NvdXJjZSk7XHJcblxyXG4gICAgICAgIHZhciBwbGF5X2ljb24gPSBidG4uYWRkQ2xhc3MoJ3BsYXlpbmcnKS5maW5kKCdpJyk7XHJcbiAgICAgICAgaWYgKHBsYXlfaWNvbi5oYXNDbGFzcygnbWF0ZXJpYWwtaWNvbnMnKSkge1xyXG4gICAgICAgICAgICBwbGF5X2ljb24udGV4dCgncGF1c2VfY2lyY2xlX2ZpbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBDaGVjayB3ZWJzdG9yYWdlIGZvciBleGlzdGluZyB2b2x1bWUgcHJlZmVyZW5jZS5cclxuICAgIGlmIChzdG9yZS5lbmFibGVkICYmIHN0b3JlLmdldCgncGxheWVyX3ZvbHVtZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2b2x1bWUgPSBzdG9yZS5nZXQoJ3BsYXllcl92b2x1bWUnLCB2b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoZSBxdWVyeSBzdHJpbmcgaWYgYnJvd3NlciBzdXBwb3J0cyBlYXN5IHF1ZXJ5IHN0cmluZyBhY2Nlc3MuXHJcbiAgICBpZiAodHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB2YXIgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBpZiAodXJsUGFyYW1zLmhhcygndm9sdW1lJykpIHtcclxuICAgICAgICAgICAgdm9sdW1lID0gcGFyc2VJbnQodXJsUGFyYW1zLmdldCgndm9sdW1lJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKCcuYnRuLWF1ZGlvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYW5kbGVQbGF5Q2xpY2soJCh0aGlzKS5kYXRhKCd1cmwnKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGF1ZGlvIGVsZW1lbnQuXHJcbiAgICBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgJHBsYXllciA9ICQocGxheWVyKTtcclxuXHJcbiAgICBzZXRWb2x1bWUodm9sdW1lKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgZXZlbnRzLlxyXG4gICAgJHBsYXllci5vbigncGxheScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpc19wbGF5aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgJCgnLmpwLXVubXV0ZScpLmhpZGUoKTtcclxuICAgICAgICAkKCcjcmFkaW8tcGxheWVyLWNvbnRyb2xzJykuYWRkQ2xhc3MoJ2pwLXN0YXRlLXBsYXlpbmcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRwbGF5ZXIub24oJ2VuZGVkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJ21lZGlhU2Vzc2lvbicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhU2Vzc2lvbi5zZXRBY3Rpb25IYW5kbGVyKCdwYXVzZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzdG9wQWxsUGxheWVycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2tzLlxyXG4gICAgJCgnLmpwLXBhdXNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanAtbXV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBzZXRWb2x1bWUoMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanAtdW5tdXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHNldFZvbHVtZSg1NSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanAtdm9sdW1lLWZ1bGwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgc2V0Vm9sdW1lKDEwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanAtdm9sdW1lLWJhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgJGJhciA9ICQoZS5jdXJyZW50VGFyZ2V0KSxcclxuICAgICAgICAgICAgb2Zmc2V0ID0gJGJhci5vZmZzZXQoKSxcclxuICAgICAgICAgICAgeCA9IGUucGFnZVggLSBvZmZzZXQubGVmdCxcclxuICAgICAgICAgICAgdyA9ICRiYXIud2lkdGgoKSxcclxuICAgICAgICAgICAgeSA9ICRiYXIuaGVpZ2h0KCkgLSBlLnBhZ2VZICsgb2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgaCA9ICRiYXIuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHNldFZvbHVtZShNYXRoLnJvdW5kKCh4L3cpICogMTAwKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanAtdm9sdW1lLXJhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBzZXRWb2x1bWUoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIYW5kbGUgYXV0b3BsYXkuXHJcbiAgICAkKCcuYnRuLWF1ZGlvW2RhdGEtYXV0b3BsYXk9XCJ0cnVlXCJdOmZpcnN0JykuY2xpY2soKTtcclxuXHJcbn0pO1xyXG4iXX0=