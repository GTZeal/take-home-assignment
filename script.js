function openNav() {
    const selfie = document.querySelector('.selfie');
    const navBar = document.querySelector('.navBar');
    navBar.style.transform = 'translateX(50%)';
    selfie.style.transform = 'translateX(-30%)';
    navBar.style.zIndex = '1';
}

function closeNav() {
    const selfie = document.querySelector('.selfie');
    const navBar = document.querySelector('.navBar');
    navBar.style.transform = 'translateX(0)';
    selfie.style.transform = 'translateX(0)';
    navBar.style.zIndex = '-1';
}


function pkContent() {
    document.getElementById('contentDesc').innerHTML = "Both my parents are from Lahore, Pakistan. Although I've never lived in Pakistan, every time I visit it feels like home; as if I never left in the first place. Naturally, I think it's important for me to stay connected with my roots and culture.";
}
function cndContent() {
    document.getElementById('contentDesc').innerHTML = "I'm a Canadian-born citizen but I live in Georgia. We often go up north for vacations since a lot of my family lives in Canada. I enjoy the snowy weather, eating Tim Hortons, and sight-seeing around the country.";
}
function amrContent() {
    document.getElementById('contentDesc').innerHTML = "Although my relationship with America is complex, I've spent almost my entire life in this country and consider it home. I spent my childhood in Redmond, Washington and have lived in a handful of states in the past.";
}
function socialContent() {
    document.getElementById('contentDesc').innerHTML = "I'm passionate about helping out war-torn countries, dehumanized populations, and pointing out the hypocrisy in justice/imbalance of power on the international stage. It's a subject all too grandiose for an individual like me, but I look to contribute in any way I can.";
}