import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {

      atividadeEscrita: "",
      adicionarAtividade: [],

    };

    this.atividade = this.atividade.bind(this);
    this.adicionar = this.adicionar.bind(this);
    this.remover = this.remover.bind(this);
  }

  atividade(texto){

    this.setState({

      atividadeEscrita: texto

    })
  
  };

  adicionar(){

    if(this.state.atividadeEscrita === ""){
      alert("Digite alguma tarefa!");
      return
    };

    
    Keyboard.dismiss();

    this.setState({

      adicionarAtividade: [...this.state.adicionarAtividade, this.state.atividadeEscrita], 
      
      atividadeEscrita: ""

    })
  };

  remover(indexRemover){
    const remover = this.state.adicionarAtividade.filter(( item , index) => index !== indexRemover);

    this.setState({
      adicionarAtividade: remover
    })
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>

          <View style={styles.header}>

            <Text style={styles.nomeApp}>To-do List</Text>

          </View>

          <View>
            
            <TextInput value={this.state.atividadeEscrita} onChangeText={this.atividade} style={styles.input} placeholder="Digite sua atividade"/>

            <TouchableOpacity onPress={this.adicionar} style={styles.botaoAdicionar}>
              <Text style={styles.textoAdicionar}>Adicionar</Text>
            </TouchableOpacity>

          </View>

          <View>
            
            <FlatList
              data = {this.state.adicionarAtividade}
              keyExtractor={(item, index) => index.toString()}
              renderItem = {({item, index}) => (<View style={styles.atividades}>
                <Text style={styles.textoAtividade}>{item}</Text>
                
                <TouchableOpacity onPress={() => this.remover(index)}>  
                  <Text style={styles.removerAtividade}>X</Text>
                </TouchableOpacity>

              </View>)}
            />

          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
  },

  header:{
    backgroundColor: "#87cefa",
    height: 100
  },
  nomeApp:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 60
  },
  input:{
    width: 350,
    height: 60,
    fontSize: 25,
    borderWidth: 1,
    marginTop: 50,
    marginBottom: 20,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 6,
  },
  botaoAdicionar:{
    backgroundColor: '#02b402ff', 
    width: 150,
    height: 50,
    alignSelf: 'center',
    borderRadius: 8
  },

  textoAdicionar:{
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    marginTop: "auto",
    marginBottom: 'auto'
  },

  atividades:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    borderWidth: 1,
    padding: 5,
    borderRadius: 6
  },

  textoAtividade:{
    fontSize: 25,
    left: 5
  },

  removerAtividade:{
    fontSize: 25,
    color: 'red',
    right: 5
  }

})

export default App; 