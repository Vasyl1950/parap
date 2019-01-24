import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
} 

}
const IMAGES =[
	{ "id":1, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har1.jpg"},
    { "id":2, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har2.jpg"},
    { "id":3, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har3.jpg"},
    { "id":4, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har4.jpg"},
    { "id":5, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har5.jpg"},
    { "id":6, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har6.jpg"},
    { "id":7, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har7.jpg"},
    { "id":8, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har8.jpg"},
    { "id":9, "category": "cover", "caption": "Ресторан ГАРАЗД", "url":"assets/img/har9.jpg"},
    { "id":10, "category": "cover", "caption":"Ресторан ГАРАЗД", "url":"assets/img/har10.jpg"},
    { "id":11, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img19n.jpg"},
    { "id":12, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img20.jpg"},
    { "id":13, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img20n.jpg"},
    { "id":14, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img21n.jpg"},
    { "id":15, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img22n.jpg"},
	{ "id":16, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img23.jpg"},
	{ "id":17, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img23n.jpg"},
	{ "id":18, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img24n.jpg"},
	{ "id":19, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img25n.jpg"},
	{ "id":20, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img26n.jpg"},
	{ "id":21, "category": "kitchen", "caption": "На здоров'я!", "url"  :"assets/img/img27n.jpg"},
	{ "id":22, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img28n.jpg"},
	{ "id":23, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img29n.jpg"},
	{ "id":24, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img30n.jpg"},
	{ "id":25, "category": "kitchen", "caption": "На здоров'я!", "url":"assets/img/img31n.jpg"},
	{ "id":26, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har25.jpg"},
	{ "id":27, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har16.jpg"},
	{ "id":28, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har17.jpg"},
	{ "id":29, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har18.jpg"},
	{ "id":30, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har19.jpg"},
	{ "id":31, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har20.jpg"},
	{ "id":32, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har21.jpg"},
	{ "id":33, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har22.jpg"},
	{ "id":34, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har23.jpg"},
	{ "id":35, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har24.jpg"},
	
 ]

 


 

 