import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import LogoImg from '../../assets/logo.png';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import { fetchCharacters } from '../../services/CharactersService';

const Container = styled.View`
  height: 100%;
  padding: 0 20px;
`;

const Logo = styled.Image`
  width: 80px;
  height: 40px;
  margin: 40px 0;
  align-self: center;
`;

export const List = styled.FlatList.attrs((props) => ({
  columnWrapperStyle: props.numColumns && {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}))`
  width: 100%;
`;

export const Loader = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 100px;
`;

const Home: React.FC = () => {
  const [characters, setCharacters] = useState(null);
  const [loadingNewItems, setLoadingNewItems] = useState<boolean>(false);

  useEffect(() => {
    fetchCharacters(0)
      .then((res) => {
        const { results } = res.data.data;
        setCharacters(results);
      })
      .catch((res) => console.log(res.response));
  }, []);
  console.log(characters, 'jcharacters');

  const loadMoreData = async () => {
    const Offset = characters.length;
    setLoadingNewItems(!loadingNewItems);

    return await fetchCharacters(Offset)
      .then((res) => {
        const { results } = res.data.data;

        setCharacters((oldCharacters) => oldCharacters.concat(results));
        setLoadingNewItems(!loadingNewItems);
      })
      .catch((res) => console.log(res.response));
  };

  return (
    <Container>
      <Logo source={LogoImg} />

      {!characters ? (
        <LoadingPage />
      ) : (
        <List
          data={characters}
          numColumns={2}
          keyExtractor={(i) => `${i.id}`}
          onEndReached={() => loadMoreData()}
          onEndReachedThreshold={0}
          renderItem={({ item }) => (
            <CharacterCard
              thumbnail={`${item.thumbnail.path}/standard_xlarge.jpg`}
              name={item.name}
            />
          )}
          ListFooterComponent={() => {
            return (
              <Loader>
                {loadingNewItems && (
                  <ActivityIndicator color="#BF3934" size={30} />
                )}
              </Loader>
            );
          }}
        />
      )}
    </Container>
  );
};

export default Home;
