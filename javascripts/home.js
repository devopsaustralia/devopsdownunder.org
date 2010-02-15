---
layout: nil
---
window.addEvent('domready', function() { 

    var doing = new Widget('doing', {url: '{{ site.url }}/data/doing.json', count: 3});
    var seeing = new ImageWidget('seeing', {url: '{{ site.url }}/data/seeing.json', count: 5});
    var listening = new ImageWidget('listening', {url: '{{ site.url }}/data/listening.json'});
    
});

