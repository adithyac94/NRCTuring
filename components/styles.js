import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width:317,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
    height: 40,
    marginTop:12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    backgroundColor:'#ffff'
  },
  admininput: {
    marginTop:12,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    backgroundColor:'#ffff',
    
   

  },
  admininput1: {
    width:317,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,   
    borderTopStartRadius:11,
    borderTopLeftRadius:11,
    borderTopRightRadius:11,
    borderBottomLeftRadius:11,
    borderBottomEndRadius:11,
    borderBottomRightRadius:11,
    borderBottomStartRadius:11,
    borderWidth:1,
    
   

  },
  button: {
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: 150,
  },
  button2: {
    width:'30%',height:40,borderWidth:1,borderColor:'#00008b'
    ,borderRadius:50,marginTop:20,justifyContent:'center',alignItems:'center'
  },
  button1: {
   
    alignItems: "center",
    borderTopStartRadius:26,
    borderTopLeftRadius:26,
    borderTopRightRadius:26,
    borderBottomLeftRadius:26,
    borderBottomEndRadius:26,
    borderBottomRightRadius:26,
    borderBottomStartRadius:26,
    borderWidth:2,
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 1,
    backgroundColor: "#253970",
    
    height: 55, marginTop: 20,
    borderRadius: 40,  justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  qtext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
 
  avatarcontainer: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
  admincontainer: {
    flex: 1,
    backgroundColor: "#BEBEBE",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 45,
    //fontWeight: 'bold'
  },
  avatarmainheading: {
    fontSize: 45,
    //fontWeight: "bold",
  },
  avatarImageClass1: {
    width: 100,
    height: 100,
    justifyContent: "flex-start",
    padding: 12,
    margin: 20,
    borderRadius: 50,
  },
  avatarImageClass: {
    width: 100,
    height: 100,
    justifyContent: "center",
    padding: 12,
    margin: 20,
    borderRadius: 50,
  },
  avatarImageClass2: {
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    padding: 12,
    margin: 20,
    borderRadius: 50,
  },
  avatarbutton: {
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  questionContainer: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "space-around",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  question: {
    fontSize: 22,
    margin: 20,
  },
  image: {
    width: "7%",
    height: undefined,
    aspectRatio: 210 / 291,
    marginRight: "auto",
    marginLeft: "auto"
  },
  avatarimage:{
    width: 100,
    height: 100,
  },
  option: {
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    flexShrink: 1,
    borderWidth: 5,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#EDECEC",
    padding: 15,
  }, 
  score: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "grey",
    padding: 5,
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 5,
    overflow: "hidden",
  },
  button: {
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: 150,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    //fontWeight: "100",
    letterSpacing: 0.25,
    color: "white",
  },
  adtext: {
    fontSize: 16,
    width: 317,
    height: 17,
    fontWeight: 'bold',
    flex:.1,
    textAlign:"left",  
    color: "#707070",
  },
  uploadtext: {
    fontSize: 16,
    width: 317,
    height: 17,
    fontWeight: 'bold',
    textAlign:"left",  
    color: "#707070",
  },
  admintext: {
    fontSize: 21,
    lineHeight: 50,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  resultImageClass: {
    width: 80,
    height: 80,
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 10,
  },
  resultHeading: {
    fontSize: 45,
  },
  resultScore: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "black",
  },
  resultText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: "white",
  }
});
