import { Center, Spinner } from "@chakra-ui/react";

type Props = {};

export default function Loading({}: Props) {
    return (
        <Center h="100vh" w="full">
            <Spinner />
        </Center>
    );
}
