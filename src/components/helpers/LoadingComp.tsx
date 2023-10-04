import { Center, Spinner } from "@chakra-ui/react";

type Props = {};

export default function LoadingComp({}: Props) {
    return (
        <Center h="full" w="full">
            <Spinner />
        </Center>
    );
}
