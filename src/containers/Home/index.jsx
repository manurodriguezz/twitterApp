import React, { useState } from 'react';
import { Box, Button, TextInput } from 'grommet';
import { useDispatch } from 'react-redux';
import { search } from 'Actions/setTweets';
import { useHistory } from 'react-router-dom';
import '@yaireo/tagify/dist/tagify.css'; // Tagify CSS

const Home = () => {
  const [data, setData] = useState({ parties: [], query: '' });
  const parties = ['Democrats', 'Republicans'];//['Frente Amplio', 'Partido Nacional', 'Cabildo Abierto', 'Partido Colorado', 'PERI'];
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState('');

  const onClickParty = (party) => {
    if (!(data.parties.includes(party))) {
      const aux = data.parties;
      aux.push(party);
      setData({ parties: aux, tags: data.tags });
    } else {
      const aux = data.parties;
      aux.splice(aux.indexOf(party), 1);
      setData({ parties: aux, tags: data.tags });
    }
  };

  const setValue = (value) => {
    setInput(value);
  };

  const onSubmit = async () => {
    data.query = input;
    await dispatch(search(data));
    history.push('/showTweets');
  };

  return (
    <Box>
      <Box align="stretch" direction="row" gap="xlarge" pad="large">
        {parties.map((value) => (
          <Button
            key={value}
            size="medium"
            onClick={() => onClickParty(value)}
            label={value}
            primary={data.parties.includes(value)}
            color="#1DA1F2"
          />
        ))}
      </Box>
      {/* <Tags
        onChange={(e) => (e.persist(), onAddTag(e.target.value))}
        whitelist={suggestions}
      /> */}
      <TextInput
        placeholder="Escriba una consulta aqui"
        value={input}
        onChange={(event) => setValue(event.target.value)}
      />
      <Box pad={{ left: 'xlarge', right: 'xlarge', top: 'medium' }}>
        <Button fill size="large" primary color="#1DA1F2" label="Buscar" onClick={onSubmit} />
      </Box>
    </Box>
  );
};

export default Home;
