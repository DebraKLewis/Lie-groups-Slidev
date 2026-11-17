### Nested sequences of subalgebras in nilpotent and solvable Lie algebras

***Claim:*** 

1. $\ \fg$ is nilpotent $\ \Longleftrightarrow \ {}$ there is a sequence of ideals 
$$
\fg = I(0) ⊃ I(1) ⊃ ··· ⊃ I(k) = \{0\} 
$$
$\quad{}$ such that $[\fg, I(j)] \subseteq I({j+1})$.
<Spacer size="5px"/>

2. $\ \fg$ is solvable $\ \Longleftrightarrow \ {}$ there is a sequence of subalgebras 
$$
\fg = \mathfrak{a}(0) ⊃ \mathfrak{a}(1) ⊃ ··· ⊃ \mathfrak{a}(k) = \{0\} 
$$
$\quad{}$ such that $\mathfrak{a}({i+1})$ is an ideal in $\mathfrak{a}(i)$ and $\ \mathfrak{a}(j)/\mathfrak{a}({j+1})\ {}$ is abelian.


---

#### Sketch of proof of existence of a nested sequence of ideals of a nilpotent algebra

$\text{ ``}\Longrightarrow\text{''} \ {}$ If $\fg$ is nilpotent, let $I(j) = \fg_j$. 

$\text{ ``}\Longleftarrow\text{''} \ {}$  Use induction to show that $\ \fg_j \subseteq I(j), \quad j = 0, \ldots, k.$

Starting step: 
$$
\eqa{I(1) &\supseteq [\fg, I(0)] \\
& = [\fg, \fg] \\
&= \fg_1.
}
$$ 

Induction step: $\fg_j \subseteq I(j) \ \Longrightarrow$
$$
\eqa{
 \fg_{j + 1} &= [\fg, \fg_j] \\
 &\subseteq [\fg, I(j)] \\
 &\subseteq I({j + 1}).
}
$$ 


---

#### Sketch of proof of existence of a nested sequence of subalgebras of a solvable algebra

$\text{ ``}\Longrightarrow\text{''} \ {}$ If $\fg$ is solvable, let $\mathfrak{a}(j) = \fg^{j}$. 

$\text{ ``}\Longleftarrow\text{''} \ {}$ Use induction, with starting step $\ \fg^{0} = \fg = \mathfrak{a}(0), \ {}$ to show that 
$$
\fg^{j} \subseteq \mathfrak{a}(j) \qquad j = 0, \ldots, k, \qquad
\text{and hence} \qquad \fg^{k} = \mathfrak{a}(k) = \{ 0 \}.
$$ 

For any Lie algebra, the derived algebra is the smallest ideal such that the quotient of the algebra by the ideal is abelian. 

Hence $\ \mathfrak{a}(j)/\mathfrak{a}({j+1})\ {}$ abelian $\ \Longrightarrow \ 
 [\mathfrak{a}_j, \mathfrak{a}_j] \subseteq \mathfrak{a}({j+1}).$

$\fg^{j} \subseteq \mathfrak{a}(j) \ \Longrightarrow$
$$
\fg^{j} = [\fg^{j}, \fg^{j}] \subseteq [\mathfrak{a}(j), \mathfrak{a}(j)] \subseteq \mathfrak{a}({j + 1}).
$$

---
routeAlias: solvability-1D-submodule
---

### Solvability and the existence of a 1D submodule

***Claim:*** If $V$ is a complex $\fg$-module of a solvable Lie algebra of $\fg$  nontrivial space $V$, then $\ \exists \ v \in V$ such that $\ \text{span}\{v\}\ {}$ is invariant under the action of $\fg, \,{}$
i.e., $v$ is an eigenvector of $\, \xi \quad \forall \ \xi \in \fg$.
<Spacer size="5px"/>

*Verify:* Use induction on the dimension of $\fg$. 

If $\fg$ is 1D, choose any nonzero element $\xi \in \fg$;  $\xi$ has an eigenvector.

*Induction step:* Assume true for any solvable $j$-dimensional subalgebra, and consider a $(j + 1)$-dimensional solvable subalgebra $\fg$. 

$\fg$ solvable $\ \Longrightarrow \ [\fg, \fg] \neq \fg \  \Longrightarrow \ \exists \ n$-dimensional subspace $\fg' \supseteq [\fg, \fg]$.

$\fg'$ is an ideal of $\fg$, and hence solvable, since
$$
[\fg', \fg] \subseteq [\fg, \fg] \subseteq \fg'.
$$

---

#### Second slide of the proof the existence of a 1D submodule
<Spacer size="5px"/>

By the induction hypothesis, $\exists \ v \in V \ {}$ and  $\ \lambda: \fg' \to \C$ such that
$$
\xi(v) = \lambda(\xi) v \qquad \quad \forall \ \xi \in \fg'.
$$

Choose $\eta \in \fg$ such that 
$$
\fg = \fg' \oplus \text{span}\{ \eta \}
$$
and define 
$$
v_j := \eta^j(v) \qquad j \in \N 
$$
and
$$
W = \text{span}\{ v_0, v_1, \ldots \} \subseteq V.
$$

---

#### Third slide of the proof the existence of a 1D submodule
<Spacer size="5px"/>

$V$ finite dimensional $\ \Longrightarrow \ \exists \ \ell \in \N \ {}$ such that 
$$
v_{\ell + 1} \in \text{span} \{ v_0, v_1, \ldots, v_\ell \} \sands
v_{\ell} \not \in \text{span} \{ v_0, v_1, \ldots, v_{\ell - 1} \}.
$$
$\{ v_0, v_1, \ldots, v_\ell \} \ {}$ is a basis of $W$. 
<Spacer size="5px"/>

Given $\xi \in \fg', \ \fg'$ an ideal $\ \ \Longrightarrow \ \ [\xi, \eta] \in \fg' \ \ \Longrightarrow$  
$$
\eqa{
\xi(v_j) &= \xi(\eta(v_{j - 1})) \phantom{\sum} \\
&= [\xi, \eta](v_{j - 1})  + \eta(\xi(v_{j - 1})) \phantom{\int} \\
&= \lambda([\xi, \eta]) v_{j - 1} + \lambda(\xi) v_j
}
$$
for $j = 1, \ldots, \ell$. 

---

#### Fourth slide of the proof the existence of a 1D submodule
<Spacer size="5px"/>

The matrix of $\xi$ with respect to the basis $\ \{ v_0, v_1, \ldots, v_\ell \} \ {}$ is
$$
\lambda(\xi) \idm + \lambda([\xi, \eta]) N_1, 
%\qquad \text{where} \qquad 
%N_1 = \sum_{j = 0, \dots, \ell} \ev_{j + 1} \ev_j^T,
$$
where $N_1$ is the matrix with $1$'s on the first superdiagonal and $0$'s everywhere else.

Since $\xi$ was an arbitrary element of $\fg'$,  
$$
\lambda = \smallfrac 1 {\ell + 1} \text{trace}_W|_{\fg'}.
$$

$\fg'$ is an ideal and traces of commutators equal $0$, so $\ \xi \in \fg'\ \Longrightarrow$
$$
\lambda([\xi, \eta]) = \frac {\text{trace}_W [\xi, \eta]} {\ell + 1} = 0 %\qquad \text{and hence}
$$
$\Longrightarrow$
$$
\xi|_W = \lambda(\xi) \idm_{W}.
$$

---

#### Fifth slide of the proof the existence of a 1D submodule
<Spacer size="5px"/>

An eigenvector of $\eta|_W$ is an eigenvector of every element of $\fg'$, and hence of every element of 
$$
\fg = \fg' \oplus \text{span}\{ \eta \}. 
$$

<Spacer size="5px"/>

***Consequence:***

 An irreducible complex finite dimensional representation of a solvable Lie algebra is 1-dimensional.

---

### Lie's Theorem

If $(V, \rho)$ is a finite dimensional $\fg$-module of a solvable Lie algebra $\fg$, 
then there is a basis of $V$ w.r.t. the matrix of $\rho(\xi)$ is upper triangular $\ \forall \ \xi \in \fg$.
<Spacer size="5px"/>

*Verify:* Use induction on $\text{dim} \, V. \ {}$ 

If $V$ is 1D, there's nothing to show.

*Induction step:* Assume that the claim holds for $n$-dimensional $\fg$-modules, and consider an $(n + 1)$-dimensional $\fg$-module $V$. 

$\fg$ solvable $\ \Longrightarrow \ \exists \ v_0 \in V$ such that $\ \text{span}\{v_0 \}\ {}$ is invariant under the action of $\fg$. 

$$
\tilde V :=  V/\text{span}\{v_0\}
$$ 
is a $\fg$-module, with action
$$
\tilde \rho(\xi)([v]) := [\rho(\xi)(v)] \qquad \quad \forall \ v \in V.
$$

---

#### Second slide of proof of Lie's Theorem
<Spacer size="5px"/>

By the induction hypothesis, there is a basis $\ \{[v_1], \ldots, [v_n]\}\ {}$ of $\tilde V$ with respect to which the matrices of all $\tilde \rho(\xi)$ are upper triangular. 

$$\tilde \rho(\xi)([v_j]) \in \text{span}\{[v_1], \ldots, [v_j] \} \quad \Longrightarrow \quad
\rho(\xi)(v_j)  \in \text{span}\{v_0, v_1, \ldots, v_j \},
$$
so $\{ v_0, \ldots, v_n \}\ {}$ is a basis of $V$ w.r.t. the matrices of all $\rho(\xi)$ are upper triangular.

--- 

### Three corollaries of Lie's Theorem

$1. \ \fg$ finite dimensional, solvable, and complex $\ \ \Longrightarrow \ \ \exists \ {}$ a sequence of ideals 
$$
0 ⊂ I(1) ⊂ ··· ⊂ I(n) = \fg
$$
such that $I({j + 1})/I(j)\ {}$ is 1D for $j = 1, \ldots, n - 1$.
<Spacer size="1px"/>

$2.$  A finite dimensional complex Lie algebra $\fg$ is solvable $\ \Longleftrightarrow \  [\fg, \fg]\ {}$ is nilpotent.
<Spacer size="1px"/>


$3.$  $\fg$ is solvable $\ \ \Longleftrightarrow \ \ [\fg, \fg]$ is nilpotent.
<Spacer size="5px"/>

*Verify:*

$1.$ The ideals in $\fg$ are the submodules of $(\fg, \text{ad})$. <br/>
Apply Lie’s theorem and the previous claim about the existence of a 1D invariant subspace to $(\fg, \text{ad}).\ {}$

---

#### Sketch of proof of the second corollary of Lie's Theorem
<Spacer size="5px"/>

$\text{ ``}\Longleftarrow\text{''} \ {}$ Nilpotent algebras are solvable, as are abelian algebras, so
$\ [\fg, \fg] \ {}$ and $\ \fg/[\fg, \fg] \ {}$ are both solvable. 

$\Longrightarrow \ \ \fg$ is solvable.
<Spacer size="5px"/>

$\text{ ``}\Longrightarrow\text{''} \ {}$  Applying Lie’s theorem to $(\fg, \text{ad}),\ \exists \ {}$ a basis of $\fg$ w.r.t. the matrices of $\ad(\fg)$ are upper triangular, and hence have strictly upper triangular commutators.

The algebra $\mathfrak{n}$ of strictly upper triangular is nilpotent. 

Let $\ \phi: \fg \to \mathfrak{n} \ {}$ denote the homomorphism taking $\xi$ to the matrix of $\text{ad}_\xi$.

$$
\phi([\xi, \eta]) = [\phi(\xi), \phi(\eta)] \in \mathfrak{n}
\qquad \Longrightarrow \qquad \text{ad}([\fg, \fg]) \ \text{is nilpotent.}
%_{[\xi_1,\eta_1]}) \cdots \text{ad}_{[\xi_k,\eta_k]})  = 0
$$

Chase through nested brackets to show that $[\fg, \fg]$ is nilpotent.

---

#### Sketch of proof of the third corollary of Lie's Theorem
<Spacer size="5px"/>

$\text{ ``}\Longleftarrow\text{''} \ \ \ [\mathfrak{g}, \mathfrak{g}]$ nilpotent $\ \ \Longrightarrow \ \ {}$ it is solvable.

Communtivity of $\ \fg/[\fg, \fg] \ \ \Longrightarrow \ \ {}$ it is solvable $\ \ \Longrightarrow \ \ \fg$ is solvable.

$\text{ ``}\Longrightarrow\text{''} \ \ \ {}$ Assume $\fg$ is solvable and, WLOG,  complex. 

$\exists$ a basis of $\fg$ with respect to which $\ad(\fg)$ is a subalgebra of the algebra $\mathfrak{b}$ of upper-triangular matrices.

$\Longrightarrow \qquad \qquad \qquad \qquad \qquad \qquad 
[\ad(\fg),\ad(\fg)]=\ad([\fg, \fg]) \subset \mathfrak{n}$,

the algebra of strictly upper triangular matrices, which is nilpotent.

$\Longrightarrow \qquad \qquad \qquad \qquad \qquad \qquad 
\ad([\xi_1, [ \ldots [\xi_{n-1}, \xi_n] \ldots ]) = 0$

for sufficiently large $n$ and all $\xi_i \in[\mathfrak{g}, \mathfrak{g}]$. 

$\Longrightarrow \qquad \qquad \qquad \qquad \qquad \qquad
[\eta,[\xi_1, [\ldots [\xi_{n-1}, \xi_n ] \ldots ] = 0$ 

for sufficiently large $n$ and all $\xi_i$ and $\eta \in[\fg, \fg]$.

---

### A cousin of Lie's Theorem 
<Spacer size="5px"/>

***Claim:*** If $\fg$ is a subalgebra of $\text{End}(V)$ for a finite dimensional nontrivial space $V$, such that all elements of $\fg$ are nilpotent, there is a basis of $V$ with respect to which all matrices of elements of $\fg$ are strictly upper triangular.
<Spacer size="5px"/>

*Not proved here.* 

This is Theorem 5.33 in Kirillov, and he doesn't prove it either, but provides three references for the proof.

---

### Extremely rough sketch of the proof of Engel's Theorem

The "nonobvious direction" of Engel's Theorem is: if all elements of $\fg$ are ad-nilpotent, then $\fg$ is nilpotent. 

The proof uses the following, which we won't prove: 
If $\fg$ is a subalgebra of $\text{End}(V)$ for a finite dimensional nontrivial space $V$, such that all elements of $\fg$ are nilpotent, then $\ \exists \ v \in V$ such that $\ \xi(v) = 0 \quad \forall \ \xi \in \fg$.

Use induction on the dimension of $\fg$. 

$\exists \ 0 \neq \xi \in \fg$ such that 
$$
0 = \ad_\eta(\xi) = - \ad_\xi(\eta) \qquad \forall \ \eta \in \fg,
$$
and hence $\xi \in Z(\fg)$. 

$\fg/Z(\fg)$ consists of ad-nilpotent elements, and has lower dimension than $\fg$, so our induction hypothesis implies that $\fg/Z(\fg)$ is nilpotent.

$Z(\fg)$ is nilpotent, which implies $\fg$ is nilpotent.