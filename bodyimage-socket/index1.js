var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var connected = false;


app.use(express.static(__dirname + '/public'));

http.listen(3000, function(){
  console.log('listening on :3000');
});


io.on('connect', function(socket){
  connected = true;

  socket.on('ondrag',function(msg){
    console.log('ondrag:'+msg);
    //io.sockets.emit('colors',msg);
    socket.broadcast.emit('ondrag',msg); 
  });//on colorchoice
 
  socket.on('ondragsender',function(msg){
    console.log('ondragsender:'+msg);
    //io.sockets.emit('colors',msg);
    socket.broadcast.emit('ondragsender',msg); 
  });
  socket.on('nextlayer',function(msg){
    socket.broadcast.emit('nextlayer',msg); 
  });




  socket.on('receiveprofile',function(){
    console.log("ondrag");
  });//receiveprofile

    // // never mind this. Just poking around.
    socket.emit('setID', socket.id);
    // image message received...yeah some refactoring is required but have fun with it...
    socket.on('user image', function (msg) {
        var base64Data = decodeBase64Image(msg.imageData);
        // if directory is not already created, then create it, otherwise overwrite existing image
        fs.exists(__dirname + "/" + msg.imageMetaData, function (exists) {
            if (!exists) {
                fs.mkdir(__dirname + "/" + msg.imageMetaData, function (e) {
                    if (!e) {
                        console.log("Created new directory without errors." + client.id);
                    } else {
                        console.log("Exception while creating new directory....");
                        throw e;
                    }
                });
            }
        })

        // write/save the image
        // TODO: extract file's extension instead of hard coding it
        fs.writeFile(__dirname + "/" + msg.imageMetaData + "/" + msg.imageMetaData + ".jpg", base64Data.data, function (err) {
            if (err) {
                console.log('ERROR:: ' + err);
                throw err;
            }
        });
        // I'm sending image back to client just to see and a way of confirmation. You can send whatever.
        socket.emit('user image', msg.imageData);
    });

    socket.on('message', function (m) {
    });

    socket.on('disconnect', function () {
        connected = false;
    });


});//connect



    //TODO: function to decode base64 to binary
    function decodeBase64Image(dataString) {
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
            response = {};
        if (matches.length !== 3) {
            return new Error('Invalid input string');
        }
        response.type = matches[1];
        response.data = new Buffer(matches[2], 'base64');
        return response;
    }