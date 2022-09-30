import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from "react-native";

export default function Welcome(){
    return(
        <View style={styles.container}>
        
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../img/zoe.png')}
                    style={{ }}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.Title}>
                Plan, Do, Achieve!

                </Text>

                <Text style={styles.Text}> 
                    Faça seu Login:
                </Text>
                <TextInput style={styles.Input}>
                    Login:
                </TextInput>
                <TextInput style={styles.Input2}>
                    Senha:
                </TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        ACESS
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerLogo:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerForm:{
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        padding: '5%',
        marginBottom: 250,
        backgroundColor:'#ccc'
    },
    Input:{
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius:50,
        paddingVertical: 8,
        width:'50%',
        alignSelf:'center',
        textAlign:'center',
        bottom:'65%',
        alignItems:'center',
        justifyContent:'center'
    },
    Input2:{
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius:50,
        paddingVertical: 8,
        width:'50%',
        textAlign:'center',
        alignSelf:'center',
        bottom:'45%',
        alignItems:'center',
        justifyContent:'center'
    },
    Title:{
        fontWeight:"bold",
        color:'#111'
    },
    Text:{
        fontFamily:'SansSeriff',
        color:'#888'
    },
    button:{
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius:50,
        paddingVertical: 8,
        width:'30%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#ccc'
    }
})