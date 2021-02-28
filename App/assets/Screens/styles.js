import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoContainer:{
          width:'100%',
          position:'absolute',
          flexDirection:'row',
          alignContent:'center',
          alignItems:'center',
          justifyContent:"space-between",
          top:30,

      },
      logo:{
          width:120,
          resizeMode:'contain',
          height:40,

          
      },
      menu:{
          width:40,
          height:40,
        

      },
      headingText:{
          color:'black',
          textTransform:'uppercase',
          fontSize:18,
          fontWeight:"800",
          //fontFamily:'Arial',


      },
      subheadingText:{

      },
      textContainer:{
          position:'absolute',
          top:'30%',
      },
      buttonContainer:{
          width:'100%',
          padding:5,
    
      },
      buttonStyles:{
          borderRadius:10,
         // backgroundColor:'yellow',
          //width:'100%',
          height:40,
          justifyContent:'center',
          alignItems:'center',
      },
      buttonText:{
          fontSize:18,
          fontWeight:'500',
          textTransform:'uppercase',
      }

    
});

export default styles;