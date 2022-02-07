import { View, Text, SafeAreaView, Dimensions, Item, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/core'

import LinearGradient from 'react-native-linear-gradient';

// Carousel
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styleGlobal from '../../styles/global'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 4);

const PreLogin = () => {

    const navigation = useNavigation()
    const [activeSlide, setactiveSlide] = useState(0)

    const dataList = [
        {
        "id": false,"title": "Bem vinde ao HappyMe", 
        "content": "Aqui você pode enviar e receber cartas de pessoas aleatórias, conte algo legal sobre seu dia!",
        "button": "",
        "image": 'https://i.imgur.com/iA57vfm.png',
        },

        {
        "id": true,
        "title": "Se divirta!", 
        "content": "O aplicativo é para diversão, caso precise de ajuda profissional busque alguém da area, você não está sozinho(a)!", 
        "button": "Começar!",
        "image": 'https://i.imgur.com/c7CvvaJ.png',
        }
    ]

    const Item = ({id,title, content, button, image}) => (
        <View style={styles.itemContainer}>
            <LinearGradient 
                colors={['#FFC117', '#f5f5f5']}
                style={styleGlobal.preLoginItem}
            >
                <Image
                    style={styleGlobal.preLoginImage}
                    source={{
                    uri: image,
                    }}
                />
                <Text style={styleGlobal.preLoginTitle}>{title}</Text>
                <Text style={styleGlobal.preLoginText}>{content}</Text>
                {id? (
                    <TouchableOpacity 
                        style={styleGlobal.preLoginButton}
                        onPress={login}
                    >
                        <Text style={styleGlobal.preLoginButtonText}>{button}</Text>
                    </TouchableOpacity>
                ) 
                    :null
                }
                
            </LinearGradient>
        </View>
    )

    const renderItem = ({ item }) => (
        <Item id={item.id} title={item.title} content={item.content} button={item.button} image={item.image} />
    )

    const login = async () => {
        navigation.navigate('Login')
    }


    return (
        <SafeAreaView style={styleGlobal.preLoginContainer}>
                <Carousel
                    layout={'default'} 
                    layoutCardOffset={9}
                    data={dataList}
                    renderItem={renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setactiveSlide(index)}
                />
                <Pagination
                    dotsLength={2}
                    activeDotIndex={activeSlide}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                <Text>illustrations by Storyset</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: '100%',
    justifyContent: 'center',
  },
});


export default PreLogin;
