#Protocol explaination

##Protocol

The protocol is a simple protocol that is used to communicate between the client and the server. The protocol is based on an string that is sent to the server. The main goal of the protocol is to be as optimized as possible.
The Format is :

```js
`${dataSizeInChar},${typeOfData},${date},${data}`
//so for exemple for moving up:
4,m,2022-10-20T18:38:43.686Z,h
```

In data type, there is 3 types of data :
m for movement
f for fire
i for interaction
(some will be added later)
