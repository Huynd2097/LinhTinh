viewer = document.getElementById('viewer').innerHTML;
viewer = viewer.replace(/\?imgmax=0/g, '');
document.getElementById('viewer').innerHTML = viewer;
