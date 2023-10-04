import { Box, Container, Text } from "@chakra-ui/react";

type Props = {};

export default function NotFound({}: Props) {
    return (
        <Box>
            <Container variant="wider" maxW="container.xl">
                <Text fontSize="lg">Page not found</Text>
            </Container>
        </Box>
    );
}
