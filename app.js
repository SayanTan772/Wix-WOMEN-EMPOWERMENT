const body = document.querySelector("body");

body.style.width = "100vw";
body.style.height = "100vh";
body.style.background = "url('./media/background.jpg')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.overflowX = "hidden";
body.style.backgroundAttachment = "fixed";
body.style.boxSizing = "border-box";

const nav_top = document.createElement("div");
nav_top.style.width = "100%";
nav_top.style.height = "30px";
nav_top.style.backgroundColor = "#ffff";
nav_top.style.padding = "20px";
nav_top.style.position = "fixed";
nav_top.style.top = "0";
nav_top.style.left = "0";
nav_top.style.zIndex = "999";

body.appendChild(nav_top);

const nav_below = document.createElement("div");
nav_below.style.width = "100%";
nav_below.style.height = "30px";
nav_below.style.backgroundColor = "rgba(0,0,0,0.45)";
nav_below.style.padding = "20px";
nav_below.style.position = "fixed";
nav_below.style.top = "70px";
nav_below.style.left = "0";
nav_below.style.zIndex = "999";
nav_below.style.display = "flex";
nav_below.style.alignItems = "center";
nav_below.style.justifyContent = "space-between";


body.appendChild(nav_below);

const leftDiv = document.createElement("div");
leftDiv.classList.add("left");
leftDiv.textContent = "WOMEN PWR";
leftDiv.style.fontSize = "24px";
leftDiv.style.fontWeight = "400";
leftDiv.style.color = "#ffff";
nav_below.appendChild(leftDiv);

const middleDiv = document.createElement("div");
const ulEle = document.createElement("ul");
ulEle.style.listStyleType = "none";

const navlinks = ["About", "Support Us", "News", "Event", "Podcast", "Contact"];
navlinks.forEach((link) => {
    const liEle = document.createElement("li");
    liEle.className = "liEle";
    liEle.textContent = link;
    liEle.style.float = "left";
    liEle.style.margin = "0px 14px";
    liEle.style.color = "#ffff";
    liEle.style.fontSize = "18px";
    liEle.style.cursor = "pointer";

    ulEle.appendChild(liEle);
});

middleDiv.appendChild(ulEle);
nav_below.appendChild(middleDiv);

body.appendChild(nav_below);

const home = document.createElement("div");
home.style.width = "100%";
home.style.height = "100%";
home.style.display = "flex";
home.style.justifyContent = "center";
home.style.alignItems = "flex-end";

body.appendChild(home);

const h1 = document.createElement("h1");
h1.style.width = "50%";
h1.style.fontSize = "64px";
h1.style.color = "#ffff";
h1.style.textAlign = "center";
h1.textContent = "Empowering Women and Girls Worldwide";

home.appendChild(h1);

const events = document.createElement("div");
events.style.width = "100%";
events.style.height = "100%";
events.style.backgroundColor = "#ffff";

body.appendChild(events);

const div_con = document.createElement("div");
div_con.style.width = "100%";
div_con.style.height = "150px";
div_con.style.display = "flex";

events.appendChild(div_con);

const colors = ["rgb(200,72,105)", "rgb(42,112,222)", "rgb(33,62,140)"];

for(let i=0; i<3; i++) {
    const div = document.createElement("div");
    div.style.width = "33.33%";
    div.style.height = "100%";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.backgroundColor = `${colors[i]}`;
    div.className = "div1";
    div.innerHTML = `<h2 style="font-size:20px;color:#ffff;">Our Mission</h2><p style="font-size:18px;
    color:#ffff;margin:4px 0px;">Our Goal, Vision & Commitment</p>`;
    div_con.appendChild(div);
}

const card_con = document.createElement("div");
card_con.style.width = "100%";
card_con.style.height = "500px";
card_con.style.display = "flex";
card_con.style.justifyContent = "center";
card_con.style.alignItems = "center";

events.appendChild(card_con);

for(let i=0; i<3; i++) {
    const card = document.createElement("div");
    card.style.width = "300px";
    card.style.height = "300px";
    card.style.border = "0.5px solid rgba(0,0,0,0.35)";
    card.style.margin = "15px 0px 0px 20px";
    card.innerHTML = `<div class="image" style=" width:100%;height:180px;object-fit:cover;object-position:center;overflow:hidden;"><img src="./media/background.jpg" style="width:100%;height:100%;"></div>
    <h3 style="margin:8px;border-bottom:0.5px solid rgba(0,0,0,0.2);padding:10px 0px;">Female Robotics Team wins minor award</h3>
    <ul style="list-style-type:none;width:100%;transform:translateX(-24px);">
    <li style="float:left;"><i class="fa-regular fa-eye"></i></li>
    <li style="float:left;margin-left:8px;">0</li>
    <li style="float:left;margin-left:12px;"><i class="fa-solid fa-message"></i></li>
    <li style="float:left;margin-left:8px;">0</li>
    <li style="float:right;margin-left:8px;margin-right:24px;color:rgb(200,72,105);"><i class="fa-regular fa-heart"></i></li>
    <ul>`;

    card_con.appendChild(card);
}

const btn_div = document.createElement("div");
btn_div.style.width = "100%";
btn_div.style.display = "flex";
btn_div.style.justifyContent = "center";
btn_div.style.alignItems = "center";
btn_div.style.transform = "translateY(-25px)";

events.appendChild(btn_div);

const read_btn = document.createElement("button");
read_btn.style.width = "150px";
read_btn.style.height = "60px";
read_btn.textContent = "Read More";
read_btn.style.backgroundColor = "rgb(200,72,105)";
read_btn.style.fontSize = "16px";
read_btn.style.color = "#ffff";
read_btn.style.border = "none";

btn_div.appendChild(read_btn);

const banner = document.createElement("div");
banner.style.width = "100%";
banner.style.height = "240px";
banner.style.color = "#ffff";
banner.style.backgroundColor = "rgb(33,62,140)";
banner.style.display = "flex";
banner.style.flexDirection = "column";
banner.style.justifyContent = "center";
banner.style.alignItems = "center";

banner.innerHTML = `<h1><i>I am no bird; and no net ensnares me; I am a free
human being with an independent will.</i></h1>
<p style="font-size:18px;font-weight:300;color:#ffff;margin-top:14px;">Charlotte Bronte, Jane Eyre</p>`;

body.appendChild(banner);

const upcoming = document.createElement("div");
upcoming.style.width = "100%";
upcoming.style.height = "80%";
upcoming.style.backgroundColor = "#ffff";
upcoming.style.display = "flex";
upcoming.style.flexDirection = "column";
upcoming.style.justifyContent = "center";
upcoming.style.alignItems = "center";

body.appendChild(upcoming);

const h_big = document.createElement("h1");
h_big.textContent = "Upcoming Events";
h_big.style.fontSize = "54px";

upcoming.appendChild(h_big);

const container = document.createElement("div");
container.style.width = "900px";
container.style.height = "auto";

upcoming.appendChild(container);

for(let i=0; i<3; i++) {
    const tab = document.createElement("div");
    tab.className = "tabs";
    tab.style.width = "100%";
    tab.style.height = "100px";
    tab.style.fontSize = "20px";
    tab.style.margin = "20px 0px";
    tab.style.borderBottom = "0.6px solid rgba(0,0,0,0.4)";
    tab.innerHTML = `Sun 23 Sept
    <br>
    10k against breast cancer/ san francisco
    <button style="width:120px;height:45px;background-color:rgb(200, 72, 105);color:#ffff;font-size:16px;float:right;border:none;">Register Now</button>`;

    container.appendChild(tab);
}

const join = document.createElement("div");
join.style.width = "100%";
join.style.height = "70%";
join.style.display = "flex";

body.appendChild(join);

const left = document.createElement("div");
left.style.width = "35%";
left.style.height = "100%";
left.style.display = "flex";
left.style.flexDirection = "column";
left.style.justifyContent = "center";
left.style.alignItems = "center";
left.style.backgroundColor = "rgb(33,62,140)";
left.innerHTML = `<h1 style="color:#ffff;font-size:54px;">JOIN US</h1>
<h3 style="color:#ffffffb8;font-size:24px;margin-top:14px;">Empower our women and girls.</h3>
<button style="width:145px;height:55px;background-color:rgb(200, 72, 105);color:#ffff;font-size:18px;margin:20px 0px;border:none;">Donate Now</button>`;

join.appendChild(left);

const right = document.createElement("div");
right.style.width = "65%";
right.style.height = "100%";
right.style.background = "url('./media/bg.webp')";
right.style.backgroundSize = "cover";
right.style.backgroundPosition = "center";
right.style.backgroundRepeat = "no-repeat";

join.appendChild(right);

const contact = document.createElement("div");
contact.style.width = "100%";
contact.style.height = "60%";
contact.style.backgroundColor = "#ffff";
contact.style.display = "flex";

body.appendChild(contact);

const pwr = document.createElement("div");
pwr.style.width = "33.33%";
pwr.style.height = "100%";
pwr.style.paddingLeft = "50px";
pwr.style.display = "flex";
pwr.style.flexDirection = "column";
pwr.style.justifyContent = "center";
pwr.style.alignItems = "flex-start";
pwr.innerHTML = `<h2 style="margin-bottom:24px;font-size:44px;">Women PWR</h3>
<p style="font-size:20px;margin-bottom:24px;color:rgba(0,0,0,0.55);">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
</p>

<b>Email: </b>info@mysite.com
<br>
<br>
<b>Phone:</b> 123-456-7890
<br>
<br>
<b>Registered Charity:</b> 12345-67`;

contact.appendChild(pwr);

const form = document.createElement("div");
form.style.width = "33.33%";
form.style.height = "100%";
form.style.paddingLeft = "50px";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "flex-start";

form.innerHTML = `<h1 style="margin-bottom:24px;">Get Monthly Updates</h1>
<label style="font-size:20px;color:#000000a0;">Enter your mail here*</label>
<input type="email" name="email" id="email" style="width:350px;height:40px;background-color:#ffff;margin-top:18px;border-bottom:1.5px solid rgb(0,0,0);border:none;font-size:20px;padding-left:12px;background-color:rgba(0,0,0,0.15);">
<button style="width:350px;height:40px;background-color:rgb(200, 72, 105);color:#ffff;font-size:18px;margin:20px 0px;cursor:pointer;border:none;">Sign Up</button>`;

contact.appendChild(form);

const links = document.createElement("div");
links.style.width = "33.33%";
links.style.height = "100%";
links.style.paddingLeft = "50px";
links.style.display = "flex";
links.style.flexDirection = "column";
links.style.justifyContent = "center";
links.style.alignItems = "flex-start";

links.innerHTML = `<h1 style="margin-bottom:28px;">Quick links</h1>
<ul style="list-style-type:none;">
    <li style="font-size:20px;margin:12px 0px;cursor:pointer;">About</li>
    <li style="font-size:20px;margin:12px 0px;cursor:pointer;">Support Us</li>
    <li style="font-size:20px;margin:12px 0px;cursor:pointer;">News</li>
    <li style="font-size:20px;margin:12px 0px;cursor:pointer;">Event</li>
    <li style="font-size:20px;margin:12px 0px;cursor:pointer;">Podcast</li>
    <li style="font-size:20px;margin:12px 0px;cursor:pointer;">Contact</li>
</ul>`;

contact.appendChild(links);

const footer = document.createElement("div");
footer.style.width = "100%";
footer.style.height = "50px";
footer.style.display = "grid";
footer.style.placeItems = "center";
footer.style.backgroundColor = "rgb(16,31,70)";
footer.style.color = "#ffff";
footer.textContent = "© 2035 by Women PWR. Powered and secured by Wix |  Terms of Use  |  Privacy Policy";

body.append(footer);

const messg = document.createElement("div");
messg.style.width = "45px";
messg.style.height = "45px";
messg.style.backgroundColor = "rgb(200, 72, 105)";
messg.style.position = "fixed";
messg.style.right = "25px";
messg.style.bottom = "25px";
messg.style.zIndex = "999";
messg.style.display = "grid";
messg.style.placeItems = "center";
messg.style.color = "#ffff";
messg.style.fontSize = "20px";

messg.innerHTML = `<i class="fa-solid fa-message"></i>`;

body.append(messg);

function checkScreen() {
    const screenWidth = window.innerWidth;
    const mobileBreakpoint = 768;
    if (screenWidth < mobileBreakpoint) {
        console.log('Mobile View');

        body.style.padding = "0";
        body.style.margin = "0";
        body.style.margin = "0";
        body.style.boxSizing = "border-box";
        leftDiv.style.fontSize = "18px";
        document.querySelector(".liEle").style.margin = "0px 8px";
        ulEle.style.transform = "translate(-20px,-10px)";
        h1.style.fontSize = "44px";
        h1.style.width = "100%";
        div_con.style.height = "auto";
        div_con.style.display = "block";
        const divEle = document.querySelectorAll(".div1");
        divEle.forEach((ele) => {
            ele.style.width = "100%";
            ele.innerHTML = `<h2 style="font-size:20px;color:#ffff;">Our Mission</h2><p style="font-size:16px;
            color:#ffff;">Our Goal, Vision & Commitment</p>`;
        });
        events.style.height = "auto";
        events.style.paddingBottom = "20px";
        card_con.style.height = "auto";
        card_con.style.flexDirection = "column";
        btn_div.style.transform = "translateY(0px)";
        btn_div.style.margin = "20px 0px";
        banner.innerHTML = `<h1  style="text-align:center;"><i>I am no bird; and no net ensnares me; I am a free
        human being with an independent will.</i></h1>
        <p style="font-size:18px;font-weight:300;color:#ffff;margin-top:14px;">Charlotte Bronte, Jane Eyre</p>`;
        h_big.style.fontSize = "44px";
        container.style.width = "95%";
        const tabs = document.querySelectorAll(".tabs");
        tabs.forEach((tab) => {
            tab.style.width = "100%";
            tab.style.height = "auto";
            tab.style.fontSize = "20px";
            tab.innerHTML = `Sun 23 Sept
            <br>
            10k against breast cancer/ san francisco
            <button style="width:100px;height:40px;background-color:rgb(200, 72, 105);color:#ffff;font-size:14px;border:none;margin:10px 0px;">Register Now</button>`;
        });
        join.style.display = "block";
        left.style.width = "100%";
        left.style.height = "45%";
        left.innerHTML = `<h1 style="color:#ffff;font-size:44px;">JOIN US</h1>
        <h3 style="color:#ffffffb8;font-size:20px;margin-top:0px;">Empower our women and girls.</h3>
        <button style="width:145px;height:55px;background-color:rgb(200, 72, 105);color:#ffff;font-size:18px;margin:20px 0px;border:none;">Donate Now</button>`;
        right.style.width = "100%";
        right.style.height = "55%";
        contact.style.display = "block";
        contact.style.height = "auto";
        pwr.style.width = "100%";
        pwr.style.height = "60%";
        pwr.innerHTML = `<h2 style="margin-bottom:24px;font-size:44px;">Women PWR</h3>
        <p style="text-align:center;padding:0px 14px;font-size:16px;margin-bottom:24px;color:rgba(0,0,0,0.55);">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
        </p>

        <b>Email: </b>info@mysite.com
        <br>
        <br>
        <b>Phone:</b> 123-456-7890
        <br>
        <br>
        <b>Registered Charity:</b> 12345-67`;
        pwr.style.paddingLeft = "0px";
        pwr.style.alignItems = "center";
        form.style.width = "100%";
        form.style.height = "60%";
        form.style.paddingLeft = "0px";
        form.style.alignItems = "center";
        links.style.width = "100%";
        links.style.height = "60%";
        links.style.paddingLeft = "0px";
        links.style.alignItems = "center";
        footer.style.height = "45px";
        footer.style.fontSize = "16px";
        footer.style.textAlign = "center";
    } else {
        console.log('Laptop/Desktop View');
    }
}
checkScreen();

