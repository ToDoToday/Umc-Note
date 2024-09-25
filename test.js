// 클래스 선언
class Student {
	constructor(name, school) {
		// 필드
		this.name = name;
		this.school = school;
	}
	
	// 메소드
	introduction() {
		console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고있습니다`)
	}
}

const matthew = new Student('matthew', '상명대학교');
console.log(matthew.name);//getter를 이용해 값 읽음
console.log(matthew.school);
matthew.name= 'popo';//setter를 이용해 값 변경
matthew.school='울산대학교'
matthew.introduction();//