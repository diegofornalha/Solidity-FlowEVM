import React, { useMemo } from "react";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import ChallengeExpandedCard from "../components/ChallengeExpandedCard";
import { challengeInfo } from "../data/challenges";
import useCustomColorModes from "../hooks/useCustomColorModes";

export default function HomeView({ connectedBuilder, userProvider }) {
  const { bgColor } = useCustomColorModes();
  const cardBgColor = useColorModeValue("sre.cardBackground", "sreDark.cardBackground");

  const builderAttemptedChallenges = useMemo(() => {
    if (!connectedBuilder?.challenges) {
      return [];
    }

    return Object.fromEntries(
      Object.entries(connectedBuilder.challenges).filter(([_, challengeData]) => challengeData?.status),
    );
  }, [connectedBuilder]);

  return (
    <Box>
      <Box bgColor={bgColor}>
        <Box mt="-20px" pt="20px" bgColor={cardBgColor}>
          {Object.entries(challengeInfo).map(([challengeId, challenge], index, { length }) => (
            <ChallengeExpandedCard
              challengeId={challengeId}
              challenge={challenge}
              challengeIndex={index < 5 ? index : index - 1}
              builderAttemptedChallenges={builderAttemptedChallenges}
              userProvider={userProvider}
              connectedBuilder={connectedBuilder}
              isFirst={index === 0}
              isLast={length - 1 === index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
