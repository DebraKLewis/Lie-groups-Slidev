---
marp: true
paginate: true
---

### Ideals of Lie algebras

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
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A subalgebra $I$ of $\fg$ is an *ideal* if 
$$\xi \in I \ \Longrightarrow \ \ad_\xi(\fg) \subseteq I.
$$

$~$
If $I_1$ and $I_2$ are ideals in $\fg$, then the following are also ideals:
- $I_1 \cap I_2$ 
- $I_1 + I_2$ 
- $[I_1, I_2]% = \text{span}\{ [x, y] :  x ∈ I_1, y ∈ I_2 \}$.

The last assertion follows from the Jacobi identity: given $\xi \in \fg$, $\eta \in I_1$, and $\zeta \in I_2$, 
$$
[\xi, [\eta, \zeta]] = [\underbrace{[\xi, \eta]}_{\in I_1}, \zeta] + [\eta, \underbrace{[\xi, \zeta]}_{\in I_2}]  \in [I_1, I_2].
$$

---

If $I$ is an ideal of $\fg$, then $\fg/I$ is a Lie algebra. 

If $\phi : \fg_1 → \fg_2$ is a Lie algebra morphism then $\text{ker} \ \phi$ is an ideal, and 
$$
\fg_1/\text{ker} \ \phi \approx \phi(\fg_1).
$$
$~$

Very important ideal: the *derived algebra* (AKA *commutant*) of $\fg$ is
$$
[\fg, \fg] = \text{span}\{[\xi, \eta] : \xi, \eta \in \fg \}.
$$

The derived algebra is the smallest ideal of $\fg$ such that the quotient of $\fg$ by the ideal is abelian: taking the quotient by $[\fg, \fg]$ amounts to ignoring any noncommutivity.
$~$
$\fg$ is *simple* if $\fg$ has no ideals except itself and $\triv$, and $\ [\fg, \fg] \neq \triv$. 

$\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg \ {}$ and $\ Z(\fg) = \triv$.

---

***Example:*** Let $\fg = \mathfrak{gl}(n, F) = F^{n \times n},\ {}$ where $\ F = \R\ {}$ or $\ \C$.
$$
\text{trace} \, AB =  \text{trace\,}BA \qquad \Longrightarrow \qquad \text{trace} [A, B] = 0,
$$
so
$$
[\fg, \fg] \subseteq\fh =  \mathfrak{sl}(n, F) = \text{ker} \ \text{trace}.
$$
$~$
If $E_{ij}$ denotes the $n \times n$ matrix with $ij$th entry = $1$ and all other entries equal to $0$, then 
$$
\{ E_{ij} : i \neq j \}  ∪ \{ E_{jj} - E_{(j - 1)(j-1)} : j = 2, \ldots, n \}
$$
is a basis of $\fh$. 

$$
E_{ij} = \half [E_{ii} - E_{jj}, E_{ij}] \qquad \qquad`\text{if} \ i \neq j 
$$
and
$$
E_{jj} - E_{(j - 1)(j-1)} = [E_{(j-1)j}, E_{j(j-1)}]
$$

---

$
\Longrightarrow \ [\fh, \fh] \supseteq \fh, \ {}$ and hence $\ [\fg, \fg] = [\fh, \fh] = \fh$.

$\mathfrak{sl}(n, F) = \text{ker} \ \text{trace} \quad \Longrightarrow$
$$
\fg/[\fg, \fg] = \mathfrak{gl}(n, F)/\text{ker} \ \text{trace} \approx F \, \idm \approx F.
$$
$~$

***Claim:*** $\mathfrak{sl}(2, F)$ is simple. (True for any $F$ such that $\text{char}\, F \neq 2$.)

*Verify:* $\ 0 \neq \xi = x \, e + y \, f + z \, h \in I \quad \Longrightarrow$ 
$$\eqa{
[e, [e, \xi]] &= [e, y \, h - 2 \, z\, e] = - 2 \, y \, e, 
\sands\\
[f, [f, \xi]] &= [f, - x \, h + 2 \, z \, f] = 2 \, x \, f, \phantom{X_{\int_\int}}
}
$$
so $\ I = \mathfrak{sl}(2, F) \ {}$ if either $x$ or $y$ is nonzero. 

$x = y = 0\quad \Longrightarrow \quad h \in I \quad \Longrightarrow \quad I = \mathfrak{sl}(2, F). \phantom{X^{\int^X}}$

---

## Solvable and nilpotent Lie algebras

The *lower central series* and *derived series* of a Lie algebra $\fg$ are given by
$$\eqa{
\fg^0 := \fg \qquad \qquad \qquad\ \ \ &  \fg^{(0)} := \fg\\
\fg^{j + 1} := [\fg, \fg^j] \qquad \qquad & \fg^{(j + 1)} := [\fg^{(j)}, \fg^{(j)}].    
}
$$
$\fg^j$ and $\fg^{(j)}$ are ideals for all $j \in \N$. 

$\fg$ is *nilpotent* if $\ \fg^{k} = 0\ {}$ for some $k \in \N$.

$\fg$ is *solvable* if $\fg^{(k)} = 0\ {}$ for some $k \in \N$.
$~$
There is a natural relationship between "nilpotent" as applied to a Lie algebra $\fg$ and "nilpotent" as applied to the operators $\ad_\xi \ {}$ for $\xi \in \fg$.

---

***Engel's Theorem***: $\fg$ is nilpotent $\quad \Longleftrightarrow \quad$ $\ad_\xi$ is nilpotent for all $\xi \in \fg$. 
$~$
Sketch of the proof later. 
$~$
***Claim:*** If $\xi \in \text{End}(V)\ {}$ is nilpotent, then $\ad_\xi \ {}$ is nilpotent.
$~$
*Verify:* Define $\ell_\xi, r_\xi \in \text{End}(\text{End}(V))\ {}$ by
$$
\ell_\xi(\eta) := \xi \, \eta \sands r_\xi(\eta) := \eta \, \xi \qquad \quad \forall \ \eta \in \text{End}(V).
$$
$~$
$\ell_\xi$ and $r_\xi$ are nilpotent, since $\ \xi^k = 0 \quad \Longrightarrow$
$$
(\ell_\xi^k(\phi))(v) = \xi^k(\phi(v)) = 0 \sands (r_\xi^k(\phi))(v) = \phi(\xi^k(v)) = \phi(0).
$$ 

---

Commutivity of $\ell_\xi$ and $r_\xi \ \Longrightarrow$
$$
\ad_\xi^n = (\ell_\xi - r_\xi)^n = \sum_{j = 0}^n c_j \ell_\xi^j r_\xi^{n - j}
$$
for $n \in \N$ and constants $c_j \in \Z$. 

If $\ n \geq 2 k, \ {}$ then $\ j \geq k \ {}$ or $\ n - j \geq k \ {}$ for $\ j = 0, \ldots, n$, so $\ \ad_\xi\ {}$ is nilpotent.
$~$
###  Example: upper triangular and strictly upper triangular matrices 

Let $\fb$ denote the Lie algebra of $n \times n$ upper triangular matrices, and 
$\fn$ denote the subalgebra of strictly upper triangular matrices. 
$~$
***Claim:*** $\fb$ is solvable and $\fn$ is nilpotent.
$~$

---

*Verify:* We'll follow tradition and work with flags. 

A *flag*  in a finite dimensional vector space $V$ is a nested sequence of proper subspaces
$$
V_0 = \triv ⊂ V_1 ⊂V_2 ⊂ \cdots  ⊂ V_n =V.
$$

Given a flag in $V$, temporarily let $\ V_{-j} = \triv \ {}$ for $n \in \N$, and define
$$
\fa_k := \{ \phi ∈ gl(V): \phi(V_j) ⊂ V_{j - k} \quad j = 1, \ldots, n \} \quad \qquad k = 0, \ldots, n,
$$
which satisfy $\ \triv = \fa_n \subseteq \fa_{n - 1} \subseteq \cdots \subseteq \fa_1 \ {}$.
$~$
$\phi \in \fa_j$ and $\psi \in \fa_k \ \Longrightarrow \ \phi \psi \in \fa_{j + k}$, so
$$\ [\fa_j, \fa_k] ⊂ \fa_{j + k}. \ {}$$ 

Set 
$$
\fb  := \fa_0 \sands \fn := \fa_1.
$$

---

Nilpotency of $\fn$ follows from $\ \fn^n \subseteq \fa_n = \triv, \ {}$ which can be shown by induction, 
with induction step
$$
\fn^j = [\fn,  \fn^{j - 1}] \subseteq [\fa_1, \fa_j] \subseteq \fa_{j + 1}.
$$
$~$
Now specialize to the "standard" flag in $F^n$. Let $\ \{ e_1, \ldots, e_n \}\ {}$ be a basis of $F^n$,
$$
V_0 := \triv \sands
V_j = \text{span} \{e_1, \ldots, e_j\} \qquad j = 1, \ldots, n.
$$

$\phi, \psi \in \fb \ \Longrightarrow \  [\phi, \psi] ∈ \fn = \fa_1$. (Exercise.)
$~$
Hence $\ \fb^{(1)} \subseteq \fa_1,$
$$
\fb^{(2)} = [\fb^{(1)}, \fb^{(1)}] \subseteq [\fa_1, \fa_1] \subseteq \fa_2,
$$
and so on. By induction, $\fb^{(j)} \subseteq \fa_{2j}, \ {}$ so $\fb$ is solvable.

---

### Properties of nilpotent Lie algebras

(1) $\fg$ nilpotent $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are nilpotent.

(2) $\fg$ nilpotent and nontrivial  $\quad \Longrightarrow \quad Z(\fg) \neq \triv$.

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \fg \ {}$ nilpotent.

*Verify:*
(1) If $\fh$ is a subalgebra of $\fg$, then $\fh^{j} \subseteq \fg^{j}$.

If $\fk = \phi(\fg), \ {}$ then $\ \fk^0 = \phi(\fg^0), \ {}$ and $\ \fk^j = \phi(\fg^j) \quad \Longrightarrow$
$$
%D_j \fk = \phi(D_j \fg) \quad j = 0, \ldots, k \qquad \Longrightarrow \qquad
\eqa{\fk^{j + 1} &= [\fk,  \fk^j]\\
&= [\phi(\fg), \phi(\fg^j)] \\
&= \phi([\fg, \fg^j]) \\
&= \phi(\fg^{j + 1}).
}
$$
$~$
$~$
$~$

---

(2) $\fg$ nilpotent and nontrivial $\quad \Longrightarrow \quad \exists \ k \, {}$ such that 
$$
\fg^k\neq \triv = \fg^{k + 1} = [\fg, \fg^k].
$$
Hence $Z(\fg) \supseteq \ \fg^k \neq \triv$.
$~$
(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \exists  k \, {}$ such that $\ \fg^k \subseteq Z(\fg), \ {}$ and hence
$$
\fg^{k + 1} = [\fg, \fg^k]
\subseteq [\fg, Z(\fg)] = \triv.
$$

### Properties of solvable Lie algebras:

(1) $\fg$ solvable $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are solvable.

(2) If $\ I ⊂ \fg\ {}$ is a solvable ideal and $\ \fg/I \ {}$ is solvable, then $\fg$ is solvable.

(3) If $I$ and $J$ are solvable ideals of $\fg, \ {}$ then so is $I + J$.
$~$

---

*Verify:*

(1) Analogous to arguments for nilpotency.

(2) Let $k, n\in \N$ satisfy 
$$
I^{(k)} = \triv \sands  (\fg/I)^{(n)} = \triv. 
$$

Apply (1) to the quotient homomorphism $\ \pi: \fg \to \fg/I. \ {}$ 
$$
% 0 \quad \Longrightarrow \quad 
\fg^{(n)} \subseteq I = \text{ker} \ \pi 
\quad \Longrightarrow \quad \pi(\fg^{(n)}) = 0.
$$

$$
(\fg^{(i)})^{(j)} = \fg^{(i + j)} \quad \forall \ i, j \in \N \qquad \Longrightarrow \qquad 
\fg^{(k + n)} = (\fg^{(k)})^{(n)} \subseteq I^{(n)} = \triv.
$$
$~$
(3) $I$ and $J$ solvable $\ \Longrightarrow \ I \cap J\ {}$ is solvable. Hence
$$\eqa{
(I + J)/J \approx I/(I \cap J)   \quad &\Longrightarrow \quad (I + J)/J \quad \text{solvable} \\
& \Longrightarrow \quad I + J \quad \text{solvable}.
}
$$

---

### Semisimple Lie algebras

$S$ is a *maximal solvable ideal* if $S$ is a solvable ideal in $\fg$ and is not a proper subset of another solvable ideal in $\fg$. 
$~$
***Claim:*** There is *maximal solvable ideal* $\ \text{Rad} \, \fg \ {}$ in $\fg, \ {}$ called the *radical* of $\fg$. 

*Verify:* If $S$ is a maximal solvable ideal, and $I$ is another ideal of $\fg$, then (3) $\ \Longrightarrow$
$S + I \ {}$ is solvable. 
Hence maximality of $S\ \Longrightarrow S + I = S$.
$~$
$\fg$ is *semisimple* if $\ \text{Rad} \, \fg\ {}$ is trivial.
$~$
$~$
$~$
$~$
$~$

---

Simple Lie algebras are semisimple.
*Why?* The only ideals of a simple algebra $\fg$ are $\triv$ and $\fg$, and $\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg, \ {}$ so $\fg$ is not solvable.
$~$
$\fg/\text{Rad} \, \fg\ {}$ is always semisimple.
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

***Claim:*** 

$1. \ \fg$ is nilpotent $\ \Longleftrightarrow \ {}$ there is a sequence of ideals 
$$
\fg = I_0 ⊃ I_1 ⊃ ··· ⊃ I_k = \{0\} 
$$
such that $[\fg, I_j] \subseteq I_{j+1}$.

$2. \ \fg$ is solvable $\ \Longleftrightarrow \ {}$ there is a sequence of subalgebras 
$$
\fg = \fa_0 ⊃ \fa_1 ⊃ ··· ⊃ \fa_k = \{0\} 
$$
such that $\fa_{i+1}$ is an ideal in $\fa_i$ and $\ \fa_j/\fa_{j+1}\ {}$ is abelian.

*Sketch of proofs:* 

$1. \ \text{ ``}\Longrightarrow\text{''} \ {}$ If $\fg$ is nilpotent, let $I_j = \fg^j$. 

$1. \ \text{ ``}\Longleftarrow\text{''} \ {}$  Use induction to show that $\ \fg^j \subseteq I_j, \quad j = 0, \ldots, k.$

---

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

$~$
For any Lie algebra, the derived algebra is the smallest ideal such that the quotient of the algebra by the ideal is abelian. 
$~$

---

Hence $\ \fa_j/\fa_{j+1}\ {}$ abelian $\ \Longrightarrow \ 
 [\fa_j, \fa_j] \subseteq \fa_{j+1}.$

Thus $\ \fg^{(j)} \subseteq \fa_j \ \Longrightarrow$
$$
\fg^{(j)} = [\fg^{(j)}, \fg^{(j)}] \subseteq [\fa_j, \fa_j] \subseteq \fa_{j + 1}.
$$
$~$
***Claim:*** If $\fg$ is a solvable subalgebra of $\text{End}(V)$ for a finite dimensional nontrivial space $V$, then $\ \exists \ v \in V$ such that $\ \text{span}\{v\}\ {}$ is invariant under the action of $\fg$.
I.e., $v$ is an eigenvector of $\xi \quad \forall \ \xi \in \fg$.

*Verify:* Use induction on the dimension of $\fg$. 

If $\fg$ is 1D, choose any nonzero element $\xi \in \fg$;  $\xi$ has an eigenvector.
$~$
$~$
$~$

---

Induction step: Assume true for any solvable $j$-dimensional subalgebra, and consider a $(j + 1)$-dimensional solvable subalgebra $\fg$. 

$\fg$ solvable $\ \Longrightarrow \ [\fg, \fg] \neq \fg \  \Longrightarrow \ \exists \ n$-dimensional subspace $\fg' \supseteq [\fg, \fg]$.

$\fg'$ is an ideal of $\fg$, and hence solvable, since
$$
[\fg', \fg] \subseteq [\fg, \fg] \subseteq \fg'.
$$
By the induction hypothesis, $\exists \ v \in V \ {}$ and  $\ \lambda: \fg' \to \C$ such that
$$
\xi(v) = \lambda(\xi) v \qquad \quad \forall \ \xi \in \fg'.
$$

Choose $\eta \in \fg$ such that $\ \fg = \fg' \oplus \text{span}\{ \eta \}.$

Define 
$$
v_j := \eta^j(v), \quad j \in \N, \sands W = \text{span}\{ v_0, v_1, \ldots \} \subseteq V.
$$

---

$V$ finite dimensional $\ \Longrightarrow \ \exists \ \ell \in \N \ {}$ such that 
$$
v_{\ell + 1} \in \text{span} \{ v_0, v_1, \ldots, v_\ell \} \sands
v_{\ell} \not \in \text{span} \{ v_0, v_1, \ldots, v_{\ell - 1} \}.
$$
$\{ v_0, v_1, \ldots, v_\ell \} \ {}$ is a basis of $W$. 
$~$
Given $\xi \in \fg', \ \fg'$ an ideal $\ \Longrightarrow \ [\xi, \eta] \in \fg' \ \Longrightarrow$  

$$\eqa{
\xi(v_j) &= \xi(\eta(v_{j - 1})) \\
&= [\xi, \eta](v_{j - 1})  + \eta(\xi(v_{j - 1})) \\
&= \lambda([\xi, \eta]) v_{j - 1} + \lambda(\xi) v_j
}
$$
for $j = 1, \ldots, \ell$. 

---

Hence the matrix of $\xi$ w.r.t. the basis $\ \{ v_0, v_1, \ldots, v_\ell \} \ {}$ is
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
Since $\fg'$ is an ideal and traces of commutators equal $0, \ \xi \in \fg'\ \Longrightarrow$
$$
\lambda([\xi, \eta]) = \frac {\text{trace}_W [\xi, \eta]} {\ell + 1} = 0, %\qquad \text{and hence}
$$
and hence
$$ \xi|_W = \lambda(\xi) \idm_{\!W}.
$$
$~$

---

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
then there is a flag
$$
{0} = V0 ⊂ V1 ⊂ . . . ⊂ Vn = V 
$$
that is stabilized by $\rho(\fg)$ and such that each $V_j$ has codimension 1 in $V_{j - 1}$.

I.e., there is a basis of $V$ w.r.t. the matrix of $\rho(\xi)$ is upper triangular $\ \forall \ \xi \in \fg$.
 

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

$Z(\fg)$ is nilpotent, so one of our results $\ \fg$ is nilpotent.

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





