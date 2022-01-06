import React from 'react';
import { Text, Box, Image } from '@chakra-ui/react';
import ChampSelectBG from '../assets/champselect.png';
import Champion from '../assets/champ.png';

const ChampSelect = () => {
    
    const RenderChampion = () => {
        let EmptyTab = [];
        
        for (let i = 0; i < 20; i ++) {
            EmptyTab.push(
                <>
                    <Image src = {Champion} w = "90px" h = "90px" mr = "15px" borderRadius = "50%"
                           border = "solid 2px #000" />
                </>
            );
        }
        
        return EmptyTab;
    };
    
    return (
        <Box w = "1450px"
             backgroundImage = {ChampSelectBG}
             backgroundRepeat = "no-repeat"
             h = "800px"
             mt = "100px"
             p = "5"
             margin = "100px auto"
             backgroundSize = "cover"
        >
            <Box>
                <Text variant = "Title">Choose your champion</Text>
            </Box>
            <Box d = "flex"
                // bg="red"
                 h = "600px"
                 w = "640px"
                 justifyContent = "center"
                 margin = "15px auto 0"
                 alignItems = "center"
                 flexWrap = "wrap"
                 p = "5"
            >
                {RenderChampion()}
            </Box>
        
        </Box>
    );
};

export default ChampSelect;
