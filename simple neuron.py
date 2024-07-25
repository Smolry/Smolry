import numpy as np

def sigmoid(x):
    # Our activation function: f(x) = 1 / (1 + e^(-x))
    return 1/(1+np.exp(-x))

class neuron:
    def __init__(self,weights,bias):
        self.weights=weights
        self.bias=bias

    def forwardfeed(self,inputs):
        #total=weights*inputs+bias
        #return activated total
        total=np.dot(self.weights,inputs)+self.bias
        return sigmoid(total)
    
weights=[0,1]
bias=4
n=neuron(weights,bias)
x=np.array([2,3])   #inputs are given here
print(n.forwardfeed(x))
#  0.9990889488055994


        