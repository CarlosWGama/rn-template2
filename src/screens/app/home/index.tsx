import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ReactNode, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { ImgPersonagem1 } from "../../../assets/personagens";
import { NavParamsRoot } from "../../../navigation";
import { useContextApp } from "../../../provider/context";
import { AppColors } from "../../../themes/colors";
import { AppCard, AppSquareButton } from "../../../themes/components";
import { AppButton } from "../../../themes/components/button";
import { AppFont } from "../../../themes/fonts";
import AppTemplate from "../../../themes/layouts/template";

export default function HomeScreen() {
    const  { usuario, setUsuario } = useContextApp();
    const nav = useNavigation<NativeStackNavigationProp<NavParamsRoot, "app">>()
    const [ itemModal, setItemModal ] = useState<ReactNode>(null);


    const handleButton = async () => {
        console.log('AAAA')
    }   

    const handleSair = async () => {
        setUsuario(null)
        nav.reset({index: 0, routes: [{name: 'login'}]})
    }

    return (
        <AppTemplate titulo="Informações" >
            
            {/* HEADER */}
            <AppCard style={{marginTop: -100}}>
                <View style={styles.card}>
                    <Image source={ImgPersonagem1} style={{height:150, width: 100, resizeMode: 'contain'}}/>
                    
                    <Text style={styles.cardText}>
                        Seja bem vindo {usuario?.nome}! {"\n\n"}
                        Nessa seção do aplicativo você poderá conhecer um pouco sobre os cuidados e apoios que você pode encontrar em relação a sua saúde mental
                    </Text>
                </View>
            </AppCard>

            {/* OPÇÕES */}
            <Text style={styles.informacoes}>INFORMAÇÕES</Text>

            <View style={styles.opcoes}>
                <AppSquareButton title="APP" onPress={handleButton} />
                <AppSquareButton title="CVV"  onPress={handleButton} />
                <AppSquareButton title="Dicas" onPress={handleButton} />
                <AppSquareButton title="Termometro transtorno" textStyle={{fontSize: 12}} onPress={handleButton}/>
            </View>
            <AppButton title="Sair" color={AppColors.DANGER} onPress={handleSair} />
        </AppTemplate> 
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        fontFamily: AppFont.PADRAO,
        fontSize: 17,
        textAlign: 'justify',
        width: 200
    },
    informacoes: {
        fontFamily: AppFont.NEGRITO,
        marginTop: 30
    },
    opcoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }

});