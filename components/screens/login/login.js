import {Input, InputGroup, InputLeftElement, InputRightElement, Stack} from "@chakra-ui/core";
import {Folder} from '../../icons'
import React from "react";

export default function Login(){
    return(
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Folder color='gray.300' />}
                />
                <Input type='tel' placeholder='Phone number' />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                />
                <Input placeholder='Enter amount' />
                <InputRightElement children={<Folder color='green.500' />} />
            </InputGroup>
        </Stack>
    )
}