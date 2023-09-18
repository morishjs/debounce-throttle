import {Box, Button, Card, SimpleGrid, Title,} from "@mantine/core";
import {Link} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Title
                sx={(theme) => ({
                    color: "white",
                })}
                mb="lg"
            >
                Debounce Vs. Throttle
            </Title>

            <Box
                sx={(theme) => ({
                    maxWidth: theme.breakpoints.lg,
                    margin: "0 auto",
                })}
            >
                <SimpleGrid cols={2} spacing="xl">
                    <Card shadow="sm" p="lg">
                        <Button
                            component={Link}
                            to="debounce"
                            variant="light"
                            color="blue"
                            fullWidth
                            style={{marginTop: 14}}
                        >
                            Go to Debounce
                        </Button>
                    </Card>
                    <Card shadow="sm" p="lg">
                        <Button
                            component={Link}
                            to="throttle"
                            variant="light"
                            color="blue"
                            fullWidth
                            style={{marginTop: 14}}
                        >
                            Go to Throttle
                        </Button>
                    </Card>
                    <Card shadow="sm" p="lg">
                        <Button
                            component={Link}
                            to="scroll-throttle"
                            variant="light"
                            color="blue"
                            fullWidth
                            style={{marginTop: 14}}
                        >
                            Go to Scroll Throttle
                        </Button>
                    </Card>
                </SimpleGrid>
            </Box>
        </div>
    );
}

export default App;
