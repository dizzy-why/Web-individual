
var dateYear = prompt("enter the year");
var newYear = parseInt(dateYear);

//Finding Leap Year
if ((newYear % 4) != 0) {
    document.write("<h4>" + newYear + " Common Year</h4>");
    console.log("it's a common year");
}
else if ((newYear % 100 != 0)) {
    document.write("<h4>" + newYear + " Leap Year</h4>");
    console.log("it's a leap year");
}
else if ((newYear % 400) != 0) {
    document.write("<h4>" + newYear + " Common Year</h4>");
    console.log("it's a common year");
}
else {
    document.write("<h4>" + newYear + " Leap Year</h4>");
    console.log("it's a leap year");
}



//Finding Horary Years
var yearOf;
var constYear = newYear;
remYear = newYear % 12;

switch (remYear) {
    case 0:
        yearOf = "Monkey　申";// add picture and year and chinese symbol
        document.images.horary.src = "https://thefinanser.com/wp-content/uploads/2015/12/6a01053620481c970b01b7c7617a9f970b-600wi.jpg";
        document.write("<a href=" + "https://thefinanser.com/wp-content/uploads/2015/12/6a01053620481c970b01b7c7617a9f970b-600wi.jpg" + ">" + "Source of Image" + "</a>");
        break;

    case 1:
        yearOf = "Cock　酉";
        document.images.horary.src = "https://cdn.24.co.za/files/Cms/General/d/468/17bc3b9ff2894aa7a84a88aa7ad6c238.jpg";
        document.write("<a href=" + "https://cdn.24.co.za/files/Cms/General/d/468/17bc3b9ff2894aa7a84a88aa7ad6c238.jpg" + ">" + "Source of Image" + "</a>");
        break;
    case 2:
        yearOf = "Dog　戌";
        document.images.horary.src = "https://talks.blogs.com/phototalk/images/MorgueFile_Dog.jpg";
        document.write("<a href=" + "https://talks.blogs.com/phototalk/images/MorgueFile_Dog.jpg" + ">" + "Source of Image" + "</a>");
        break;
    case 3:
        yearOf = "Boar　亥";
        document.images.horary.src = "https://www.telegraph.co.uk/content/dam/news/2016/08/25/106745172_wild-boar-NEWS_trans_NvBQzQNjv4BqgsaO8O78rhmZrDxTlQBjdEbgHFEZVI1Pljic_pW9c90.jpg?imwidth=450";
        document.write("<a href=" + "https://www.telegraph.co.uk/content/dam/news/2016/08/25/106745172_wild-boar-NEWS_trans_NvBQzQNjv4BqgsaO8O78rhmZrDxTlQBjdEbgHFEZVI1Pljic_pW9c90.jpg?imwidth=450" + ">" + "Source of Image" + "</a>");
        break;
    case 4:
        yearOf = "Rat　子";
        document.images.horary.src = "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/sc05e1381e6aed789/image/i741c85ff0bee3fba/version/1510610862/rats-eat-electric-wiring-carry-weils-disease-and-crawl-over-your-food.jpg";
        document.write("<a href=" + "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/sc05e1381e6aed789/image/i741c85ff0bee3fba/version/1510610862/rats-eat-electric-wiring-carry-weils-disease-and-crawl-over-your-food.jpg" + ">" + "Source of Image" + "</a>");
        break;
    case 5:
        yearOf = "Ox　丑";
        document.images.horary.src = "https://i.pinimg.com/736x/cb/a7/1a/cba71af8e623012f2f5eb5c846a97714--oxtail-totems.jpg";
        document.write("<a href=" + "https://i.pinimg.com/736x/cb/a7/1a/cba71af8e623012f2f5eb5c846a97714--oxtail-totems.jpg" + ">" + "Source of Image" + "</a>");
        break;
    case 6:
        yearOf = "Tiger　寅";
        document.images.horary.src = "https://media.gettyimages.com/photos/sumatran-tiger-picture-id153902835?s=612x612";
        document.write("<a href=" + "https://media.gettyimages.com/photos/sumatran-tiger-picture-id153902835?s=612x612" + ">" + "Source of Image" + "</a>");
        break;
    case 7:
        yearOf = "Hare　卯";
        document.images.horary.src = "https://writingexplained.org/wp-content/uploads/difference-between-a-rabbit-and-a-hare-300x300.jpg";
        document.write("<a href=" + "https://writingexplained.org/wp-content/uploads/difference-between-a-rabbit-and-a-hare-300x300.jpg" + ">" + "Source of Image" + "</a>");
        break;
    case 8:
        yearOf = "Dragon　辰";
        document.images.horary.src = "https://www.horoscope.com/images-US/games/game-chinese-fortune-dragon-step1.png";
        document.write("<a href=" + "https://www.horoscope.com/images-US/games/game-chinese-fortune-dragon-step1.png" + ">" + "Source of Image"+"</a>");
        break;
    case 9:
        yearOf = "Serpent　巳";
        document.images.horary.src = "https://vignette.wikia.nocookie.net/biblestudy/images/8/80/Wallpaper-serpent-3d-wallpaper.jpg/revision/latest?cb=20130425185818";
        document.write("<a href=" + "https://vignette.wikia.nocookie.net/biblestudy/images/8/80/Wallpaper-serpent-3d-wallpaper.jpg/revision/latest?cb=20130425185818" + ">" + "Source of Image" + "</a>");
        break;
    case 10:
        yearOf = "Horse　午";
        document.images.horary.src = "https://s.abcnews.com/images/Business/gty_horse_mi_130226_wmain.jpg";
        document.write("<a href=" + "https://s.abcnews.com/images/Business/gty_horse_mi_130226_wmain.jpg" + ">" + "Source of Image"+"</a>");
        break;
    case 11:
        yearOf = "Sheep　未";
        document.images.horary.src = "https://animalsaustralia-api.org/cached/image/1000sheep3.jpg";
        document.write("<a href=" + "https://animalsaustralia-api.org/cached/image/1000sheep3.jpg" + ">" + "Source of Image"+"</a>");
        break;
    default:
        yearOf = "waiting for year input";
    }

document.write("<h4> Year of the " + yearOf + "</h4><br>");
