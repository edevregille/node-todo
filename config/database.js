// MongoDB - connection URI
if(process.env.VCAP_SERVICES){
	var services = JSON.parse(process.env.VCAP_SERVICES);
  if(services.mongolab) {
    var uri = services.mongolab[0].credentials.uri;
  } else {
    uri = process.env.MONGO_URI;
  }
} else {
	if (process.env.DB_PORT_27017_TCP_ADDR){
		uri = "mongodb://" + process.env.DB_PORT_27017_TCP_ADDR + ":" + process.env.DB_PORT_27017_TCP_PORT +"/docker";
	} else{
		uri = "mongodb://edevregille:manu123@ds027613.mongolab.com:27613/IbmCloud_vtbiogtv_balfof6v"
	}
}

module.exports = {
	url: uri
};
