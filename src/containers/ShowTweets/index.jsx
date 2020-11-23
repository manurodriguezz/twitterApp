import React, { useEffect, useState } from 'react';
import tweetService from 'Api/tweets.service';
import {
  Box, Card, Text, Anchor, Avatar, Tabs, Tab, Heading,
} from 'grommet';
import { useSelector } from 'react-redux';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #657786;
`;

const ShowTweets = () => {
  const data = useSelector((state) => state.setTweets);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState({});
  const [relevantTweets, setRelevantTweets] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await tweetService.getTweets(data);
      const auxArray = [];
      for (let i = 0; i < Object.keys(response.data).length; i += 1) {
        auxArray.push(response.data[i].source.id);
      }
      if (auxArray.length === 0) {
        setEmpty(true);
      } else {
        setRelevantTweets(auxArray);
        response = await tweetService.getUsers(data);
        setUsers(response.data);
        setLoading(false);
      }
    }

    setLoading(true);
    try {
      fetchData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [data]);

  return (
    <Box overflow="auto">
      {empty && (
        <Card>
          <Box pad="large">
            <Heading>No se han encontrado datos. Lo sentimos.</Heading>
          </Box>
        </Card>
      )}
      {!empty && (
        <Tabs>
          <Tab title="Usuarios mas relevantes">
            {loading && (

              <ClipLoader
                css={override}
                size={150}
                color="#123abc"
                loading={loading}
              />
            )}
            {!loading && (
              <Box>
                <Card background="white" margin="small">
                  <Box pad="large">
                    <Box align="stretch" direction="row">
                      <Avatar pad="medium" src={users.profileImageUrl} />
                      <Text margin="small">{users.username}</Text>
                    </Box>
                    <Anchor justify="center" href={`//twitter.com/${users.username}`} label="Perfil" />
                  </Box>
                </Card>
              </Box>
            )}
          </Tab>
          <Tab title="Tweets mas relevantes">
            {loading && (

              <ClipLoader
                css={override}
                size={150}
                color="#123abc"
                loading={loading}
              />
            )}
            {!loading && (
              <Box overflow="auto">
                {relevantTweets.map((value) => (
                  <Box key={value}>
                    <TwitterTweetEmbed
                      tweetId={value}
                    />
                  </Box>
                ))}
              </Box>
            )}
          </Tab>
        </Tabs>
      )}
    </Box>

  );
};

export default ShowTweets;
