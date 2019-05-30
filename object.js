var human =
 	{
 		first_name:"ram", 
 		last_name:"shyam",
 		age:35,
 		full_name:function()
 	{
 		return this.first_name+ this.last_name
 	}
 	}
 		console.log(human.full_name());
 		//creating object through constructor
 		function batsman(name,strikerate,half_century,century,)
 		{
 			this.name=name;
 			this.strikerate=strikerate;
 			this.half_century=half_century;
 			this.century=century;
 		
 		}
var dhoni=new batsman("dhoni",143,100,150)
var virat=new batsman("virat",150,150,200)
var person=new Object();
person.age=21;
person.name="shyam"; 		