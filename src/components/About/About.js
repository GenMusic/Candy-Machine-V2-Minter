import React from 'react'
import { AboutContainer, AboutText, AboutTitle, AboutWrapper, ImageRow, ImageWrapper, GenExample, AboutBox, PriceWrapper, PriceText } from './AboutElements'

import Preview1 from '../../img/About/Preview1.png'
import Preview2 from '../../img/About/Preview2.png'
import Preview3 from '../../img/About/Preview3.png'
import Preview4 from '../../img/About/Preview4.png'
import { AboutArea } from '../Hero/HeroElements'


const AboutSection = () => {
    return (
        <AboutContainer {...AboutArea}>
            <AboutWrapper>
                <AboutBox>
                    <AboutTitle>
                        GenMusic 
                    </AboutTitle>
                    <AboutText>
                    The GenMusic access pass is a collection of 1000 utility NFTs. Giving access to exclusive artists NFT collections, our DAO and our governance token drop.
                    </AboutText>
                    <PriceWrapper>
                    <PriceText>
                        1000 Supply
                    </PriceText>
                    <PriceText>
                        Price: 2 SOL 
                    </PriceText>
               
                    </PriceWrapper>
                </AboutBox>
                <ImageWrapper>
                    <ImageRow>
                        <GenExample src = {Preview1}/>
                        <GenExample src = {Preview2}/>
                    </ImageRow>
                    <ImageRow>
                        <GenExample src = {Preview3}/>
                        <GenExample src = {Preview4}/>
                    </ImageRow>
                </ImageWrapper>
            </AboutWrapper>
            </AboutContainer>
    )
}

export default AboutSection
