const jsonString = '{"team": {"name": "India","captain": {"name": "Rohit Sharma","role": "Batsman","age": 36},"coach": {"name": "Rahul Dravid","role": "Head Coach"},"ranking": {"test": 1,"odi": 2,"t20": 3},"players": [{"name": "Virat Kohli","role": "Batsman","age": 35,"batting_average": {"test": 53.4,"odi": 58.2,"t20": 52.7},"bowling_average": null,"matches": {"test": 109,"odi": 275,"t20": 115}},{"name": "Jasprit Bumrah","role": "Bowler","age": 30,"batting_average": {"test": 2.4,"odi": 8.5,"t20": 7.0},"bowling_average": {"test": 21.3,"odi": 24.4,"t20": 19.6},"matches": {"test": 31,"odi": 75,"t20": 60}},{"name": "Hardik Pandya","role": "All-rounder","age": 30,"batting_average": {"test": 31.3,"odi": 34.6,"t20": 25.2},"bowling_average": {"test": 32.8,"odi": 36.9,"t20": 27.5},"matches": {"test": 11,"odi": 77,"t20": 87}},{"name": "Ravindra Jadeja","role": "All-rounder","age": 35,"batting_average": {"test": 36.2,"odi": 32.6,"t20": 23.3},"bowling_average": {"test": 24.3,"odi": 30.7,"t20": 27.2},"matches": {"test": 67,"odi": 174,"t20": 64}}],"upcoming_matches": [{"opponent": "Australia","date": "2024-11-05","venue": "Melbourne Cricket Ground","format": "Test"},{"opponent": "Pakistan","date": "2024-12-10","venue": "Wankhede Stadium","format": "ODI"}],"trophies_won": [{"title": "ICC Cricket World Cup","year": 1983},{"title": "ICC Cricket World Cup","year": 2011},{"title": "ICC Champions Trophy","year": 2013}]}}';
const strngfy=JSON.parse(jsonString);
const result=strngfy.team.trophies_won;
console.log(result)
for(let i=0;i<result.length;i++){
      if(result[i].year===2013)
        console.log(result[i].title);

}
