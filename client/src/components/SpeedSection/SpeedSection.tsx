import React, { useState, useEffect, useCallback } from 'react'
import {
  Box,
  Container,
  ScaleFade,
  Collapse
} from '@chakra-ui/react'
import { ReactInternetSpeedMeter } from 'react-internet-meter'

import { SpeedParameters, Speedometer } from '../index'

import { hoverAnimationCss } from '../../utils/animations'

const SpeedSection = () => {
  const [internetSpeed, setInternetSpeed] = useState<number>(0)
  const [countInternetSpeed, setCountInternetSpeed] = useState<boolean>(true)

  const getPercentForSpeedometer = useCallback((internetSpeed : number) => {
    return countInternetSpeed ? Math.floor((internetSpeed * 10)) : 100
  }, [internetSpeed])

  useEffect(() => {
    setTimeout(() => {
      setCountInternetSpeed(false)
    }, 16000)
  }, [])

  return (
    <Container
      id={'speed'}
      maxW={'container.lg'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      py={'70px'}
    >
      <ScaleFade initialScale={0.9} in={true}>
        <Box mt={{ base: '15px', md: '35px' }} css={hoverAnimationCss}>
          <ReactInternetSpeedMeter
            txtSubHeading="Internet connection is slow"
            outputType=""
            customClassName={null}
            pingInterval={4000}
            txtMainHeading="Opps..."
            thresholdUnit="megabyte"
            threshold={50}
            imageUrl="https://images.pexels.com/photos/3396664/pexels-photo-3396664.jpeg?cs=srgb&dl=pexels-josiah-farrow-3396664.jpg&fm=jpg"
            downloadSize="1781287"
            callbackFunctionOnNetworkDown={(speed : number) => {}} // todo alert
            callbackFunctionOnNetworkTest={(data : number) => setInternetSpeed(data)}
          />
          <Speedometer percent={getPercentForSpeedometer(internetSpeed)} />
        </Box>
        <Box css={hoverAnimationCss} textAlign={'center'} ml={{ base: '0px', md: '25px' }}>
          <SpeedParameters speed={internetSpeed} />
        </Box>
      </ScaleFade>
    </Container>
  )
}

export default SpeedSection