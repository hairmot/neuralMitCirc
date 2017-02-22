var assert = require("assert"),
    brain = require("./lib/brain");

var net = new brain.NeuralNetwork();

var cases = [
/*
	b = business school
	d = design school	
	business school will always accept a mit circ
	design will always reject a mit circ
*/

{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:2,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:2,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:2,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:2,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:2,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:3,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:3,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:4,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:4,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:2,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:2,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:2,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:2,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:2,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:1,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:1,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:3,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:3,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:5,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:5,b:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:5,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:5,b:0,d:1}, output: { reject : 1, accept : 0,waiveLate: 0}},
{ input : { y:5,e:1,d:0}, output: { accept : 1, reject : 0,waiveLate: 0}},
{ input : { y:5,b:0,e:1}, output: { reject : 0, accept : 1,waiveLate: 0}},
{ input : { y:5,b:0,e:1}, output: { reject : 1, accept : 0,waiveLate: 0}},

/*
		IF the student has self certed, they will always be accepts 
*/

{ input : { y:1,b:0,d:1,s:1}, output: { reject : 0, accept : 1,waiveLate: 0 }},
{ input : { y:2,b:0,d:1,s:1}, output: { reject : 0, accept : 1,waiveLate: 0 }},
{ input : { y:3,b:1,d:0,s:1}, output: { reject : 0, accept : 1,waiveLate: 0 }},

/*
		the engineering school e are an exemption to this
*/

{ input : { y:5,b:0,d:0,e:1,s:1}, output: { reject : 1, accept : 0, waiveLate: 0}},
{ input : { y:5,b:0,d:0,e:1,s:1}, output: { reject : 1, accept : 0, waiveLate: 0}},
{ input : { y:4,b:0,d:0,e:1,s:1}, output: { reject : 1, accept : 0, waiveLate: 0}},
{ input : { y:3,b:0,d:0,e:1,s:1}, output: { reject : 1, accept : 0, waiveLate: 0}},

/*

	A very obscure case for the business school whereby in year 4, rather than self certing getting accepted, they simply had the late penalty waived
	
*/
{ input : { y:4,b:1,d:0,s:1}, output: { reject : 0, accept : 0, waiveLate: 1 }},
{ input : { y:4,b:1,d:0,s:1}, output: { reject : 0, accept : 0, waiveLate: 1 }},
{ input : { y:4,b:1,d:0,s:1}, output: { reject : 0, accept : 0, waiveLate: 1 }},
{ input : { y:4,b:1,d:0,s:1}, output: { reject : 0, accept : 0, waiveLate: 1 }}

];


var trainStream = net.createTrainStream({
  /**
   * Write training data to the stream. Called on each training iteration.
   */
  floodCallback: function() {
    flood(trainStream, cases);
  },

  /**
   * Called when the network is done training.
   */
  doneTrainingCallback: function(obj) {
    console.log("trained in " + obj.iterations + " iterations with error: "
                + obj.error);

    var result = net.run({y:1,e:1,s:1});
	console.log(result);
	var outcome = Object.keys(result).sort((a,b) => result[a] - result[b]).reverse()[0];
    console.log("outcome: ", outcome + " (" + (result[outcome].toFixed(2) * 100).toString().substring(0,2) + "% certainty)");  // 0.987
  }
});

// kick it off
flood(trainStream, cases);


function flood(stream, data) {
  for (var i = 0; i < data.length; i++) {
    stream.write(data[i]);
  }
  // let it know we've reached the end of the data
  stream.write(null);
}
