-- 1. Seleciona todos os clientes da cidade de 'NY'
SELECT * 
FROM clientes
WHERE cidade = 'NY';

-- 2. Seleciona todos os funcionários cujo nome começa com a letra 'X'
SELECT *
FROM funcionarios 
WHERE nome LIKE 'X%';

-- 3. Seleciona produtos com estoque menor que 100, do maior para o menor estoque
SELECT * 
FROM produtos
WHERE quantidade_estoque < 100
ORDER BY quantidade_estoque DESC;

-- 4. Seleciona produtos cuja linha de produto contenha 'xxxx' (corrigido)
SELECT *
FROM produtos
WHERE linha_produto LIKE '%xxxx%';