console.log("WORK TRACK")
//Inicializando 
const user = {
    id: 0,
    name: ""
  };
  const workTrack = function(obj) {
    return {
      id: obj.id || 0,
      name: obj.name || "",
      shortDescription: obj.shortDescription || 200,
      taskContent: obj.taskContent || 1,
      piority: obj.piority || 1,
      category: obj.category || "",
      start_date: Date.now(),
    };
  };
  const getTasks = function(taskContent) {
    const array = [];
    for (let i = 0; i < taskContent; i++) {
      array.push(
        new workTrack({
          id: i + 1,
          name: `TaskNo.${i + 1}`,
          shortDescription: Math.random().toString(5).substring(2, 15),
          taskContent: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          piority: parseInt(Math.random() * (5 - 1) + 1).toFixed(0),
          category:   Math.random().toString(36).substring(2, 15),
          start_date:Date.UTC,
        })
      );
    }
    return array;
  };
  
  console.log(getTasks(2));
  console.log("Holi")
  const taskPrint = function(id, name,shortDescription,taskContent,piority) {
    let item = {
      id: id,
      name: name,
      shortDescription:shortDescription,
      taskContent:taskContent,
      piority:piority,
      articulos: getTasks(10),
      totaltasks: function() {
        return this.articulos
          .map(x =>"Task"+ " :"+ x.shortDescription+"Task content"+" :"+ x.taskContent+"Task piority"+" :"+x.piority)
          .reduce((current, x) => current + x, 0);
         return this.totaltasks()
       }
    };
    item._proto_ = taskPrint;
    return item;
  };
  console.log("The user has the following tasks  :" + new taskPrint(2, "Enero").totaltasks());
 
  

