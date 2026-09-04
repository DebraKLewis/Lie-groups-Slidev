---
marp: true
paginate: true
---

### A little more about nilpotent and solvable Lie algebras

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$***Claim:*** 

$1. \ \fg$ is nilpotent $\ \Longleftrightarrow \ {}$ there is a sequence of ideals 
$$
\fg = I_0 ⊃ I_1 ⊃ ··· ⊃ I_k = \{0\} 
$$
such that $[\fg, I_j] \subseteq I_{j+1}$.
$~$
$2. \ \fg$ is solvable $\ \Longleftrightarrow \ {}$ there is a sequence of subalgebras 
$$
\fg = \fa_0 ⊃ \fa_1 ⊃ ··· ⊃ \fa_k = \{0\} 
$$
such that $\fa_{i+1}$ is an ideal in $\fa_i$ and $\ \fa_j/\fa_{j+1}\ {}$ is abelian.
$~$
$~$
$~$
$~$

---

*Sketch of proofs:* 

$1. \ \text{ ``}\Longrightarrow\text{''} \ {}$ If $\fg$ is nilpotent, let $I_j = \fg^j$. 

$1. \ \text{ ``}\Longleftarrow\text{''} \ {}$  Use induction to show that $\ \fg^j \subseteq I_j, \quad j = 0, \ldots, k.$

Starting step: $I_1 \supseteq [\fg, I_0]  = [\fg, \fg] = \fg^1$. 

Induction step: $\fg^j \subseteq \fa_j \ \Longrightarrow$
$$
 \fg^{j + 1} = [\fg, \fg^j] \subseteq [\fg, I_j] \subseteq I_{j + 1}.
$$ 
$~$
$2. \ \text{ ``}\Longrightarrow\text{''} \ {}$ If $\fg$ is solvable, let $\fa_j = \fg^{(j)}$. 

$2. \ \text{ ``}\Longleftarrow\text{''} \ {}$ Use induction, with starting step $\ \fg^{(0)} = \fg = \fa_0, \ {}$ to show that 
$$
\fg^{(j)} \subseteq \fa_j \qquad j = 0, \ldots, k, \qquad
\text{and hence} \qquad \fg^{(k)} = \fa_k = \triv.
$$ 

---

For any Lie algebra, the derived algebra is the smallest ideal such that the quotient of the algebra by the ideal is abelian. 
$~$
Hence $\ \fa_j/\fa_{j+1}\ {}$ abelian $\ \Longrightarrow \ 
 [\fa_j, \fa_j] \subseteq \fa_{j+1}.$

Thus $\ \fg^{(j)} \subseteq \fa_j \ \Longrightarrow$
$$
\fg^{(j)} = [\fg^{(j)}, \fg^{(j)}] \subseteq [\fa_j, \fa_j] \subseteq \fa_{j + 1}.
$$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$

---

***Claim:*** If $\fg$ is a solvable subalgebra of $\text{End}(V)$ for a finite dimensional nontrivial space $V$, then $\ \exists \ v \in V$ such that $\ \text{span}\{v\}\ {}$ is invariant under the action of $\fg$.
I.e., $v$ is an eigenvector of $\xi \quad \forall \ \xi \in \fg$.

*Verify:* Use induction on the dimension of $\fg$. 

If $\fg$ is 1D, choose any nonzero element $\xi \in \fg$;  $\xi$ has an eigenvector.

Induction step: Assume true for any solvable $j$-dimensional subalgebra, and consider a $(j + 1)$-dimensional solvable subalgebra $\fg$. 

$\fg$ solvable $\ \Longrightarrow \ [\fg, \fg] \neq \fg \  \Longrightarrow \ \exists \ n$-dimensional subspace $\fg' \supseteq [\fg, \fg]$.

$\fg'$ is an ideal of $\fg$, and hence solvable, since
$$
[\fg', \fg] \subseteq [\fg, \fg] \subseteq \fg'.
$$

---

By the induction hypothesis, $\exists \ v \in V \ {}$ and  $\ \lambda: \fg' \to \C$ such that
$$
\xi(v) = \lambda(\xi) v \qquad \quad \forall \ \xi \in \fg'.
$$

Choose $\eta \in \fg$ such that $\ \fg = \fg' \oplus \text{span}\{ \eta \}.$

Define 
$$
v_j := \eta^j(v), \quad j \in \N, \sands W = \text{span}\{ v_0, v_1, \ldots \} \subseteq V.
$$
$~$
$V$ finite dimensional $\ \Longrightarrow \ \exists \ \ell \in \N \ {}$ such that 
$$
v_{\ell + 1} \in \text{span} \{ v_0, v_1, \ldots, v_\ell \} \sands
v_{\ell} \not \in \text{span} \{ v_0, v_1, \ldots, v_{\ell - 1} \}.
$$
$\{ v_0, v_1, \ldots, v_\ell \} \ {}$ is a basis of $W$. 
$~$
Given $\xi \in \fg', \ \fg'$ an ideal $\ \Longrightarrow \ [\xi, \eta] \in \fg' \ \Longrightarrow$  

---

$$\eqa{
\xi(v_j) &= \xi(\eta(v_{j - 1})) \\
&= [\xi, \eta](v_{j - 1})  + \eta(\xi(v_{j - 1})) \\
&= \lambda([\xi, \eta]) v_{j - 1} + \lambda(\xi) v_j
}
$$
for $j = 1, \ldots, \ell$. 
$~$
Hence the matrix of $\xi$ w.r.t. the basis $\ \{ v_0, v_1, \ldots, v_\ell \} \ {}$ is
$$
\lambda(\xi) \idm + \lambda([\xi, \eta]) N_1, 
%\qquad \text{where} \qquad 
%N_1 = \sum_{j = 0, \dots, \ell} \ev_{j + 1} \ev_j^T,
$$
where $N_1$ is the matrix with $1$'s on the first superdiagonal and $0$'s everywhere else.
$~$
Since $\xi$ was an arbitrary element of $\fg'$,  
$$
\lambda = \smallfrac 1 {\ell + 1} \text{trace}_W|_{\fg'}.
$$

---

Since $\fg'$ is an ideal and traces of commutators equal $0, \ \xi \in \fg'\ \Longrightarrow$
$$
\lambda([\xi, \eta]) = \frac {\text{trace}_W [\xi, \eta]} {\ell + 1} = 0, %\qquad \text{and hence}
$$
and hence
$$ \xi|_W = \lambda(\xi) \idm_{\!W}.
$$
Any eigenvector of $\eta|_W$ is an eigenvector of every element of $\fg'$, and hence of every element of $\ \fg = \fg' \oplus \text{span}\{ \eta \}.$ 
$~$
***Consequence:***

 An irreducible complex finite dimensional representation of a solvable Lie algebra is 1-dimensional.
 $~$
 $~$
 $~$
 $~$
 $~$
 $~$
 $~$
 $~$
 $~$
 $~$
 $~$

 ---

***Lie's Theorem:*** If $(V, \rho)$ is a finite dimensional $\fg$-module of a solvable Lie algebra $\fg$, 
then there is a basis of $V$ w.r.t. the matrix of $\rho(\xi)$ is upper triangular $\ \forall \ \xi \in \fg$.

*Verify:* Use induction on $\text{dim} \, V. \ {}$ If $V$ is 1D, there's nothing to show.

Induction step: Assume that the claim holds for $n$-dimensional $\fg$-modules, and consider an $(n + 1)$-dimensional $\fg$-module $V$. 

$\fg$ solvable $\ \Longrightarrow \ \exists \ v_0 \in V$ such that $\ \text{span}\{v_0 \}\ {}$ is invariant under the action of $\fg$. 

Hence $\ \tilde V =  V/\text{span}\{v_0\}\ {}$ is a $\fg$-module, with 
$$\tilde \rho(\xi)([v]) = [\rho(\xi)(v)] \qquad \quad \forall v \in V.$$

By the induction hypothesis, there is a basis $\ \{[v_1], \ldots, [v_n]\}\ {}$ of $\tilde V$ w.r.t. the matrices of all $\tilde \rho(\xi)$ are upper triangular. 

$$\tilde \rho(\xi)([v_j]) \in \text{span}\{[v_1], \ldots, [v_j] \} \quad \Longrightarrow \quad
\rho(\xi)(v_j)  \in \text{span}\{v_0, v_1, \ldots, v_j \},
$$
so $\{ v_0, \ldots, v_n \}\ {}$ is a basis of $V$ w.r.t. the matrices of all $\rho(\xi)$ are upper triangular.

--- 

### Two consequences of Lie's Theorem

$1. \ \fg$ finite dimensional, solvable, and complex $\ \Longrightarrow \ \exists \ {}$ a sequence of ideals 
$$
0 ⊂ I_1 ⊂ ··· ⊂ I_n = \fg
$$
such that $I_{j + 1}/I_j\ {}$ is 1D for $j = 1, \ldots, n - 1$.

$2.$  A finite dimensional complex Lie algebra $\fg$ is solvable $\ \Longleftrightarrow \  [\fg, \fg]\ {}$ is nilpotent.
$~$
*Verify:*

$1.$ The ideals in $\fg$ are the submodules of $(\fg, \text{ad})$. 
Apply Lie’s theorem and the previous claim about the existence of a 1D invariant subspace to $(\fg, \text{ad}).\ {}$
$~$
$2. \ \text{ ``}\Longleftarrow\text{''} \ {}$ Since nilpotent algebras are solvable, as are abelian algebras, 
$\ [\fg, \fg] \ {}$ and $\ \fg/[\fg, \fg] \ {}$ are both solvable. Hence $\fg$ is solvable.

---

$2. \ \text{ ``}\Longrightarrow\text{''} \ {}$  
Again, applying Lie’s theorem to $(\fg, \text{ad}),\ \exists \ {}$ a basis of $\fg$ w.r.t. the matrices of $\ad(\fg)$ are upper triangular, and hence have strictly upper triangular commutators.

The algebra $\fn$ of strictly upper triangular is nilpotent. 

Let $\ \phi: \fg \to \fn \ {}$ denote the homomorphism taking $\xi$ to the matrix of $\text{ad}_\xi$.

$$
\phi([\xi, \eta]) = [\phi(\xi), \phi(\eta)] \in \fn
\qquad \Longrightarrow \qquad \text{ad}([\fg, \fg]) \ \text{is nilpotent.}
%_{[\xi_1,\eta_1]}) \cdots \text{ad}_{[\xi_k,\eta_k]})  = 0
$$

Chasing through nested brackets, it should follow that $[\fg, \fg]$ is nilpotent.
$~$
$~$
$~$
$~$
$~$
$~$

---

***Claim***, *w/out proof here:* If $\fg$ is a subalgebra of $\text{End}(V)$ for a finite dimensional nontrivial space $V$, such that all elements of $\fg$ are nilpotent, then $\ \exists \ v \in V$ such that $\ \xi(v) = 0 \quad \forall \ \xi \in \fg$.
$~$
We can use the above result to prove the nonobvious direction of Engel's Theorem: if all elements of $\fg$ are ad-nilpotent, then $\fg$ is nilpotent. 

Use induction on the dimension of $\fg$. $\exists \ 0 \neq \xi \in \fg$ such that 
$$
0 = \ad_\eta(\xi) = - \ad_\xi(\eta) \qquad \forall \ \eta \in \fg,
$$
so $\xi \in Z(\fg)$. 

$\fg/Z(\fg)$ consists of ad-nilpotent elements, and has lower dimension than $\fg$, so our induction hypothesis implies that $\fg/Z(\fg)$ is nilpotent.

$Z(\fg)$ is nilpotent, so one of our results from Tuesday $\ \Longrightarrow \ \fg$ is nilpotent.

---

The following can be regarded as a cousin of Lie's Theorem: 

***Claim,*** *w/out proof here:* If $\fg$ is a subalgebra of $\text{End}(V)$ for a finite dimensional nontrivial space $V$, such that all elements of $\fg$ are nilpotent, then there is a basis of $V$ w.r.t. all matrices of elements of $\fg$ are strictly upper triangular.

$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$















