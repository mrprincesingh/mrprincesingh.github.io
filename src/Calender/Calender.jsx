  import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Box, Text } from "@chakra-ui/react";

function Calender() {
  return (
    <Box bg="black" color="white" pb="60px">
        <Box w="72%" transform="scale(1.05)" m="auto" textAlign="center" p="60px auto">
            <Row style={{ justifyContent: "center", padding: "20px auto", paddingTop: "60px"}}>
            <Text mb="25px" textAlign="center"  fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Github Calender</Text>
            <GitHubCalendar
                username="mrprincesingh"
                blockSize={15}
                blockMargin={5}
                color="#3d5c5c"
                fontSize={15}
            />
            </Row>
        </Box>
    </Box>
  );
}

export default Calender;