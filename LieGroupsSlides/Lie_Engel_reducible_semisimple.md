---
marp: true
paginate: true
---

### Lie's Theorem

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\fz}{\mathfrak{z}}
\newcommand{\radg}{\text{rad}(\fg)}
\newcommand{\tr}{\text{trace}\,}
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
\newcommand{\calB}{{\cal B}}
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
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$If $(V, \rho)$ is a finite dimensional $\fg$-module of a solvable Lie algebra $\fg$, then there is a flag
$$
\{0\} = V_0 ⊂ V_1 ⊂ \ldots ⊂ V_n = V 
$$
that is stabilized by $\rho(\fg)$, and such that each $V_j$ has codimension 1 in $V_{j - 1}$.

I.e., there is a basis of $V$ w.r.t. the matrix of $\rho(\xi)$ is upper triangular $\ \forall \ \xi \in \fg$.
$~$
The proof relies on this recent result: If $\fg$ is a solvable subalgebra of $\text{End}(V)$ for a finite dimensional nontrivial space $V$, then $\ \exists \ v \in V$ such that $v$ is an eigenvector of all $\xi \in \fg$.
$~$
*Very brief sketch of proof:* Let $v_1$ be a common eigenvector of $\rho(\xi)$ for all $\xi \in \fg, \ {}$ and set
$$
V_1 := \text{span}\{ v_1 \}.
$$

---

$\rho$ induces an action on $V/V_1$, since
$$
\rho(\xi)(v + x \, v_1) - \rho(\xi)v =  x \, \rho(\xi)v_1 \in V_1
$$
$\Longrightarrow \ {}$ 
$$
\rho(\xi)[v] = [\rho(\xi) v]
$$
is well-defined.

This action on $V/V_1$ has an common eigenvector $[v_2]$, so
$$
\rho(\xi) v_2 \in \text{span} \{ v_1, v_2 \} = V_2.
$$
Continuing inductively yields the result.
$~$
$~$
$~$
$~$

--- 

### Two consequences of Lie's Theorem

$1. \ \fg$ finite dimensional, solvable, and complex $\ \Longrightarrow \ \exists \ {}$ a sequence of ideals 
$$
\{0\} ⊂ I_1 ⊂ ··· ⊂ I_n = \fg
$$
such that $I_{j + 1}/I_j\ {}$ is 1D for $j = 1, \ldots, n - 1$.
$~$
$2.$  A finite dimensional complex Lie algebra $\fg$ is solvable $\ \Longleftrightarrow \  [\fg, \fg]\ {}$ is nilpotent.
$~$
*Verify:*

$1.$ The ideals in $\fg$ are the submodules of $(\fg, \text{ad})$. 

Apply Lie’s theorem and the previous claim about the existence of a 1D invariant subspace to $(\fg, \text{ad}).\ {}$
$~$

---

$2. \ \text{ ``}\Longleftarrow\text{''} \ {}$ 
Since nilpotent algebras are solvable, as are abelian algebras, both $\ [\fg, \fg] \ {}$ and $\ \fg/[\fg, \fg] \ {}$ are solvable. Hence $\fg$ is solvable.

$2. \ \text{ ``}\Longrightarrow\text{''} \ {}$  
Again, applying Lie’s theorem to $(\fg, \text{ad}),\ \exists \ {}$ a basis of $\fg$ w.r.t. the matrices of $\ad(\fg)$ are upper triangular, and hence have strictly upper triangular commutators.

The algebra $\fn$ of strictly upper triangular matrices is nilpotent. 

Let $\ \phi: \fg \to \fn \ {}$ denote the homomorphism taking $\xi$ to the matrix of $\text{ad}_\xi$.

$$
\phi([\xi, \eta]) = [\phi(\xi), \phi(\eta)] \in \fn
\qquad \Longrightarrow \qquad \text{ad}([\fg, \fg]) \ \text{is nilpotent}
%_{[\xi_1,\eta_1]}) \cdots \text{ad}_{[\xi_k,\eta_k]})  = 0
$$

$\Longrightarrow \qquad {}$ all sufficiently deeply nested brackets of elements of $[\fg, \fg]$ equal 0
$\Longrightarrow \qquad[\fg, \fg]$ is nilpotent.


---

***Engel's Theorem***: $\fg$ is nilpotent $\quad \Longleftrightarrow \quad$ $\ad_\xi$ is nilpotent for all $\xi \in \fg$. 

*Sketch of proof:* (This follows [Borcherds' lecture notes](https://math.berkeley.edu/~reb/courses/261).)

*Lemma*: If $\fg$ is a Lie algebra of nilpotent elements of $\text{End}(V)$, $V$ nontrivial and finite dimensional, then $\exists\ {}$ nonzero $v \in V$ fixed by $\fg$.

*Verify:* Use induction on the dimension of $\fg$.

The main step is to show that $\fg$ has an ideal $\fh$ of codimension 1. 

Let $\fh$ be a proper nontrivial subalgebra of $\fg$. $\fh$ acts on $\fg$ by nilpotent endomorphisms, and hence acts on $\fg/\fh$ by nilpotent endomorphisms. 

By induction there is a nonzero element of $\fg/\fh$ killed by $\fh$, so if $\fh$ has codimension greater than 1 we can add this to $\fh$ and repeat until $\fh$ has codimension 1. In this case $\fh$ is an ideal of $\fg$.

---

Now look at the subspace $W$ of $V$ fixed by all elements of $\fh$, which is nonzero by induction.

This is acted on by the 1-dimensional Lie algebra $\fg/\fh$ as $\fh$ is an ideal, and as $\fg/\fh$ acts by a nilpotent endomorphism of $W$ there must be a non-trivial fixed vector.  $\box$

This  lemma shows that if $\fg$ is a Lie algebra of nilpotent endomorphisms of $V$, then there is a flag 
$$
0 = V_0 ⊂ V_1 ⊂ \cdots ⊂ V_n = V 
$$
such that $\fg$ acts trivially on each $V_i/V_{i−1}$. 

(Take $V_1$ to be the vectors fixed by $\fg$ and apply induction to $V/V_1$). 

I.e.,  there is a basis of $V$ with repect to which $\rho(\fg)$ is strictly upper triangular. 

Conversely any strictly upper triangular Lie algebra consists of nilpotent endomorphisms.

---

***Recap:*** The radical $\radg$ of a Lie algebra $\fg$ is the unique maximal solvable ideal of $\fg$.

***Claim:*** 
1. $\fg/\radg$ is semisimple.
2. If $\fb$ is a solvable ideal in $\fg$,
$$
\fg/\fb \quad \text{semisimple} \qquad \Longrightarrow \qquad \fb = \radg.
$$

*Verify (sketch):*

1. Let $I$ be a solvable ideal in $\ \fg/\radg$.
If $\pi: \fg \to \fg/\radg\ {}$ denotes projection onto the quotient, let  
$$
\tilde I := \pi^{-1}(I).
$$

$\qquad I \ {}$ and $\ \radg\ {}$ solvable $\quad \Longrightarrow \quad \tilde I\ {}$ is solvable.

---

$$\eqa{
\tilde I \supseteq \radg \supseteq \tilde I \quad &\Longrightarrow \quad \tilde I = \radg  \\
\quad &\Longrightarrow \quad I = \tilde I/\radg = \triv.
}
$$
$~$
2. $\ \fg/\fb\ {}$ semisimple $\quad \Longrightarrow \quad \text{rad}(\fg/\fb) = \triv \quad \Longrightarrow \quad  \radg \subseteq \fb$.

$\quad {}$ Maximality of $\radg \quad \Longrightarrow \quad \fb = \radg$.
$~$

***Weak Levi decomposition***: Any $\fg$ determines an exact sequence
$$
0 → \radg → \fg → \fg_{ss} → 0,
$$
where $\fg_{ss} = \fg/\radg\ {}$ is semisimple.

$~$

---

***Claim:*** If $(V, \rho)\ {}$ is an irreducible complex $\fg$-module, then $\ \exists \ \lambda: \radg \to \C\ {}$ satisfying

$$
\rho(\xi) = \lambda(\xi) \idm_V \sands \lambda([\fg, \radg]) = \triv.
$$

$~$
*Sketch of proof:* Since $\radg$ is solvable, last week's result $\quad \Longrightarrow \quad$
$\exists \ \lambda: \radg \to \C\ {}$ and $0 \neq v_0 \in V\ {}$ such that
$$
\rho(\eta)(v_0) = \lambda(\eta) v_0 \qquad \quad \forall \ \eta \in \radg.
$$

The subspace
$$
V_\lambda := \cap_{\eta \in \radg} \text{ker} (\rho(\eta) - \lambda(\eta) \idm_{\!V})
$$
is nontrivial, since it contains $v_0$. 
$~$
Let $v, \xi, \eta$ denote arbitrary elements of $V_\lambda, \fg, \ {}$ and $\radg$.

---


Construct a $\rho(\xi)$-invariant subspace $W$ of $V$ by setting 
$$
v_0 = v \sands v_{j + 1} = \rho(\xi)(v_j),
$$
stopping when $v_{k + 1} \in \text{span}\{v_0, \ldots, v_k\},  \ {}$ and taking $\{v_0, \ldots, v_k\}$ as a basis of $W$.
$~$
If we set 
$$S_\eta := \rho(\eta) - \lambda(\eta) \idm_V,$$ 
then
$$
\rho(\eta) \circ \rho(\xi) = \rho([\eta, \xi]) + \rho(\xi) \circ \rho(\eta) %\qquad \Longrightarrow 
$$
implies
$$
\eqa{
%+ \rho(\xi)(\underbrace{\rho(\eta)(v)}_{= \, \lambda(\eta) v}) - \lambda(\eta)\rho(\xi)(v) \\
S_\eta(v_1) &= \lambda([\eta, \xi]) v_0, \\
S_\eta(v_2) &= \lambda([\eta, \xi]) v_1 +\lambda([\eta, [\eta, \xi]]) v_0, \phantom{X^\int} \quad \text{etc.}\\
} 
$$

---

Hence $W$ is $S_\eta$-invariant, and $S_\eta|_W$ has a strictly upper triangular matrix representation w.r.t. the basis $\{v_0, \ldots, v_k\}$.


The usual ~~monkey funeral sequence~~ trace arguments, e.g. 
$$
\tr \, \rho([\eta, \xi]) = \tr [\rho(\eta), \rho(\xi)] = 0,
$$
show that $W \subset \text{ker}\, S_\eta$.

Since
$$V_\lambda = \cap_{\eta \in \radg} \text{ker} \, S_\eta,
$$
$V_\lambda\ {}$ is $\rho(\xi)$-invariant. 

Hence $\ V_\lambda\ {}$ is a $\fg$-submodule.

Irreducibility of $V\quad \Longrightarrow \quad V_\lambda = V$.
$~$

---

### Semisimple elements

$\phi \in \text{End}(V) \ {}$ is *semisimple* if every $\phi$-invariant subspace of $V$ has an $\phi$-invariant complement. 

If $V$ is a finite dimensional vector space over an algebraically closed field, 
then $\phi$ is semisimple $\quad \Longleftrightarrow \quad \phi$ is diagonalizable.

The "default" $\fg$-module is $\ (\fg, \ad). \ {}$ 
$\xi \in \fg$ is *semisimple* (respectively *nilpotent*) if $\ad_\xi$ is semisimple (resp. nilpotent).
$~$
These two criteria for semisimplicity coincide for semisimple Lie algebras (but not in general).
$~$
$~$
$~$

---

### Jordan decomposition

If $\fg$ is a subalgebra of $\text{End}(V), \ {}$ then $\ \xi \in \fg\ {}$ has a unique decomposition as a sum of a semisimple element $\sigma$ and a nilpotent element $\eta$ such that 
- $[\sigma, \zeta] = 0$
- $\sigma$ and $\eta$ are polynomial in $\xi$.

This decomposition is called the *Jordan decomposition of* $\xi$.
$~$
*Construction:* Choose a basis $\, \calB\, {}$ of $V$ such that the matrix $A$ of $\xi$ w.r.t. $\, \calB \, {}$ is in Jordan normal form. 

Let $D$ denote the diagonal matrix with entries equalling the diagonal entries of $A$.
$D$ is semisimple, since the coordinate axes are invariant subspaces.


---

$N = A - D \ {}$ is nilpotent.

The block structure of the Jordan normal form $\quad \Longrightarrow \quad D$ and $N$ commute.
$~$
*Rough sketch of verification* that $\ \exists \ {}$ polynomial $p$ such that $\ D = p(A)$.

Decompose $V$ into (generalized) eigenspaces
$$
V = V_1 ⊕ · · · ⊕ V_n,
$$
so that 
$$
D|_{V_k} = λ_k \idm_{\!V_k}.
$$

The Chinese Remainder Theorem $\quad \Longrightarrow \quad \exists\ {}$ polynomial $p$ satisfying
$$
P(t) ≡ λ_k \ \mod (t − λ_k)^{\text{dim} \, V_k}.
$$

---

Since $A$ is in Jordan normal form,
$$
\lp A|_{V_k} − λ_k \idm_{V_k} \rp^{\text{dim} \, V_k} = 0.
$$
Hence
$$ 
p(A)|_{V_k} = λ_k \idm_{\!V_k}
$$ 
for $k = 1, \ldots, n, \ {}$ so $p(A) = D$.

*Uniqueness of the Jordan decomposition:* Let 
$$
D + N = A = \tilde D + \tilde N
$$
 be Jordan decompositions of $A$.

Since $D$ and $\tilde D$ are polynomials in $A$ (assumed, but not shown here), they commute and can be diagonalised simultaneously. 

---

Using the same symbols for the matrices in terms of a diagonalizing basis, 
$$
D + N = \tilde D + \tilde N \qquad \Longrightarrow \qquad 
D − \tilde D = \tilde N − N
$$
is nilpotent, and hence 0.
$~$
If $(V, \rho)$ is a $\fg$-module, and $\ \xi = \sigma + \eta \ {}$ is the Jordan decomposition of $\xi \in \fg, \ {}$ then 
$$
\rho (\xi)=\rho (\sigma)+\rho (\eta)
$$
is the Jordan decomposition of $ρ(\xi)$.
$~$
$~$
$~$
$~$
$~$
$~$

---

### Recap: invariant bilinear forms on representations and modules

A bilinear form $B$ on a $G$-representation $(V, \rho)$ is $G$-invariant if
$$
B(\rho(g)(v), \rho(g)(w)) = B(v, w) \qquad \forall \ g \in G, \ v, w \in V.
$$
$~$
If $B$ is $G$-invariant, setting $g = \text{exp}(\epsilon \, \xi), \ \xi \in \fg$, and differentiating w.r.t. epsilon gives
$$\eqa{
0 &= \smallfrac {d \ }{d \epsilon} B(\rho({\text{exp}(\epsilon \, \xi)})(v), \rho({\text{exp}(\epsilon \, \xi)})(w)) |_{\epsilon = 0} \\
&= B(\xi_V(v), w) + B(v, \xi_V(w)),
}
$$
where  $\xi_V$ denotes the infinitesimal generator of $\xi, \quad \forall \ g \in G, \ v, w \in V$.
$~$
More generally, if $(V, \rho)$ is a $\fg$-module, $B$ is $\fg$-invariant if
$$
B(\rho(\xi)(v), w) + B(v,\rho(\xi)(w)).
$$

---

### Reductive algebras

$\fg$ is *reductive* if $\ \radg = \fz(\fg), \ {}$ i.e. if $\ \fg/\fz(\fg)\ {}$ is semisimple.
(Here $\fz(\fg)$ denotes the center of $\fg$.)
$~$
***Examples:*** 

- A semisimple algebra $\fg$ is reductive, since $\fz(\fg)$ and $\radg$ are both trivial.

-  The  direct sum of an abelian algebra $\fz$ and a semisimple algebra $\fh$ is reductive if we declare that the brackets of elements of $\fz$ and $\fh$ all equal zero.

$\qquad{}$Levi's Theorem (which we won't prove) implies that any reductive algebra is 
$\qquad{}$isomorphic to a direct sum of this kind.

- The classical Lie algebras are reductive. 

---

***Claim:*** If $\fg$  has a representation $V$ such that the form
$$B_V(\xi, \eta) = \tr (\rho(\xi) \rho(\eta))
$$
is non-degenerate, then $\fg$ is reductive.

*Verify:* It suffices to show that $[\fg, \radg] = 0.\ {}$ 

If $\xi ∈ [\fg, \radg] \ {}$ and $V_i$ is an irreducible representation, then $\xi$ acts by zero on $V_i. \ {}$
(See slide 10.) Hence $\xi ∈ \text{ker} \, B_{V_i}$ . 

If we have a short exact sequence of representations 
$$
0 → V_1 → W → V_2 → 0,$$
then $B_W = B_{V_1} + B_{V_2}.$ 

Arguing by induction,  $\xi ∈ \text{ker} \, B_{V}$ for any representation $V$.

Nondegeneracy of $B_V \quad \Longrightarrow \quad \xi = 0$. 


---

*Verification that the classical Lie algebras are reductive:* 

Let $V = F^n\ {}$ for the appropriate field $F$, except for $\ V = F^{2 n}\ {}$ for $\ sp(n, F)$.

To show non-degeneracy of 
$$
 B(\xi, \eta) = \tr (\xi \eta) = \textstyle{\sum_{j, k = 1}^\ell }\xi_{jk} \eta_{kj},
 \qquad \ell = n \ \ \text{or}\ \ 2n,
$$
note that
$$
B(\xi, \xi^*) = \tr(\xi \xi^*) = \tr(\xi^* \xi) = \textstyle{\sum_{j, k = 1}^\ell } |\xi_{jk}|^2,
$$
so $\ B(\xi, \cdot) = 0 \quad \Longleftrightarrow \quad \xi = 0$.

- $\mathfrak{sl}(n, F), \mathfrak{so}(n, F)$ for $n > 2,\ \mathfrak{su}(n),\ {}$ and $\ \mathfrak{sp}(n, F)\ {}$ are semisimple.
- $\mathfrak{gl}(n, F)\ {}$ and $\ \mathfrak{u}(n) \ {}$ have one-dimensional centers: 
$$
\mathfrak{gl}(n,F)= (F \, \idm_n) ⊕ \mathfrak{sl}(n,F) \sands 
\mathfrak{u}(n)= (i\, \R \,  \idm_n) ⊕ \mathfrak{su}(n).
$$


---

### The Killing form

The *Killing form* $\ \kappa: \fg \times \fg \to F,\ F = \R\ {}$ or $\ \C, \ {}$ is given by
$$
\kappa(\xi, \eta) = \text{trace}(\ad_\xi \, \ad_\eta).
$$
$~$
The Killing form is symmetric, bilinear, and $\ad$-invariant. 
$~$
*Verify $\ad$-invariance of the Killing form:* $\quad{}$ For any $\xi, \eta, \zeta \in \fg$,
$$
\eqa{
\kappa(\ad_\xi(\eta), \zeta) &= \text{trace}(\ad_{[\xi, \eta]} \, \ad_\zeta) \\
&= \text{trace}((\ad_\xi \ad_\eta - \ad_\eta \ad_\xi) \ad_\zeta) \\
&= \text{trace}(\ad_\eta (\ad_\zeta \ad_\xi - \ad_\xi \ad_\zeta)) \\
&= \text{trace}(\ad_\eta \ad_{[\zeta, \xi]} )  \\
&= - \kappa(\eta, \ad_\xi(\zeta)).
}
$$

---

***Example:*** $sl(2, \C)$

The basis vectors $\quad
e = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad
f = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \quad
h = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}
$
$~$
satisfy $\quad [e, f] = h, \quad [h, e] = 2 \, e, \quad [h, f] = -2\, f,\ {}$ so w.r.t. basis $\{e, f, h\}$,
$~$
$$
\ad_e = \begin{bmatrix} 0 & 0 & −2 \\ 0 & 0 & 0 \\0 & 1 & 0 
\end{bmatrix}, \qquad
\ad_f = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 2 \\  -1 & 0  & 0
\end{bmatrix}, \qquad
\ad_h = \begin{bmatrix} 2 & 0 & 0 \\ 0 & -2 & 0 \\ 0  & 0 & 0
\end{bmatrix}.
$$
$~$
The nonzero basis vector pairings are $\ 
\kappa(e, f) = 4\ {}$ and $\ \kappa(h, h) = 8. \ {}$ Hence
$$
\kappa(\xi, \eta) = 4 \, \text{trace}(\xi \, \eta) \qquad \forall \ \xi, \eta \in sl(2, \C).\phantom{X^\int}
$$

---

***Example:*** $so(3, \R)$

If we identify $\ so(3, \R)\ {}$ with $(\R^3, \times),\ {}$ then
$$\eqa{
\ad_\xi(\ad_\eta(\zeta))& = \xi \times (\eta \times \zeta) \\
&= \langle \xi, \zeta \rangle \eta - \langle \xi, \eta \rangle \zeta   \\
&= \lp \eta \xi^T - \langle \xi, \eta \rangle \idm \rp \zeta
}
$$
$\Longrightarrow$
$$\eqa{
  \kappa(\xi, \eta) &= \text{trace} (\ad_\xi \circ \ad_\eta) \\
  &= \text{trace} \lp \eta \xi^T - \langle \xi, \eta \rangle \idm \rp \\
  &= - 2 \langle \xi, \eta \rangle.
}
$$
$~$
The Killing form of $so(3, \R)$ is negative-definite. 

----

## Properties of Lie algebras of compact Lie groups

If $G$ is a compact real Lie group, with Lie algebra $\fg,  \ {}$ then 
1. $\fg$ is reductive,
2. the Killing form $\kappa$ of $\fg$ is negative semi-definite, 
3. $\ker \kappa = \fz(\fg)$,
4. $\fg/\fz(\fg)\ {}$ is semisimple, with negative definite Killing form.
$~$

*Verify:* Let $(V, {\rm P})\ {}$ be a complex $n$-dimensional $G$-representation (upper case $ρ$ looks like ${\rm P}$), 
and $(V, ρ)\ {}$ the associated $\fg$-module. 

Compactness of $G \quad \Longrightarrow \quad {\rm P}\ {}$ is unitary, so
$$
ρ(\fg) ⊆ u(V) \approx \setdef {u(n)} \xi {\C^{n \times n}} {\xi + \xi^* = 0}.
$$

---

The bilinear form 
$$
B(\xi, \eta) = \tr (\xi \, \eta)
$$ 
on $u(n)$ is negative definite, since 
$$\eqa{
B(\xi, \xi) &= \tr (\xi \, \xi) \\
&= \tr (\xi (- \xi^*)) \\
&= - \tr (\xi^* \xi) \\
&= - \sum_{j, k = 1}^n |\xi|^2_{jk}.
}
$$

Hence $\ ρ(\fg) ⊆ u(V) \quad \Longrightarrow$
$$
B_V(\xi, \eta) = \tr (ρ(\xi)ρ(\eta))
$$
is negative semi-definite, with 
$$
\ker B_V = \ker ρ.
$$

---

Application to the complexified adjoint representation $\Ad: G → GL(\fg, \C)\ {}$ and the complexification of the $\fg$-module $(\fg, \ad)\ {}$ gives
- $\kappa\ {}$ is negative semi-definite, 
- $\ker \kappa = \ker \ad = \fz(\fg)$,
- $\fg/\fz(\fg)\ {}$ is semisimple, and hence $\ \fg\ {}$ is reductive.

$~$
$~$
$~$
$~$
$~$

---

### Cartan’s criteria for semisimplicity and solvability

- $\fg$ is semisimple $\quad \Longleftrightarrow \quad \kappa\ {}$ is nondegenerate.

- $\fg$ is solvable $\quad \Longleftrightarrow \quad \kappa([\fg, \fg], \fg) = 0$.

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

### $\text{Aut}(\fg)\ {}$ and derivations of Lie algebras

***Claim:*** If $\fg$ is a finite dimensional Lie algebra, then
$$
\setdef{\text{Aut}(\fg)} \phi {GL(\fg)} {\phi([\xi, \eta]) = [\phi(\xi), \phi(\eta)]}
\qquad \forall \ \xi, \eta ∈ \fg
$$
is a closed Lie subgroup of $\ GL(\fg)$.
$~$
*Verify:* $\text{Aut}(\fg)\ {}$ is a subgroup of $\ GL(\fg)$.

Given a basis $\ \{\xi_1, \ldots, \xi_n \}\ {}$ of $\fg, \ {}$ define $\ f: GL(\fg) \to \fg^{n \times n}\ {}$ by
$$
f(\phi)_{ij} := \phi([\xi_i, \xi_j]) - [\phi(\xi_i), \phi(\xi_j)].
$$
$f$ is continuous, so $\text{Aut}(\fg) = f^{-1}(0) \ {}$ is closed.
$~$
$δ ∈ \text{End}(\fg) \ {}$ is a *derivation* of $\fg$ if
$$
δ([\xi, \eta])=[δ (\xi),\eta]+[\xi ,δ (\eta)] \qquad \forall\ \xi, \eta ∈ \fg.
$$
The space $\ \derg\ {}$ of all derivations of $\fg$ is the Lie algebra of $\ \text{Aut}(\fg)\ {}$.

---

***Example:*** $\ \ad_\zeta \ {}$ is a derivation $\ \forall \zeta ∈ \fg, \ {}$ since 
$$\eqa{
\ad_\zeta([\xi, \eta]) - [\ad_\zeta(\xi), \eta] - [\xi, \ad_\zeta(\eta)]
&= [\zeta, [\xi, \eta]] - [[\zeta, \xi], \eta] - [\xi, [\zeta, \eta]] \\
&= [\zeta, [\xi, \eta]] + [\eta, [\zeta, \xi]] + [\xi, [\eta, \zeta]] \\
&= 0.
}
$$
follows from the Jacobi identity. 
$~$
$\ \ad_\zeta \ {}$ is called an *inner derivation*.
$~$
***Claim:*** $\ \ad(\fg)\ {}$ is an ideal of $\ \derg$. 

*Verify:* For any derivation $δ$ of $\fg$ and $\xi, \zeta \in \fg$,
$$\eqa{
[δ,\ad_\zeta](\xi) &= \color{blue}{δ([\zeta, \xi])} \color{black}{− [\zeta, δ(\xi)]} \\
&= \color{blue}{[δ(\zeta), \xi] + [\zeta, δ(\xi)]} \color{black}{− [\zeta, δ(\xi)]} \\
&= \ad_{δ(\zeta)}(\xi).
}
$$

---

***Example:*** $\ \text{Der}(sl(2, \C))$ 

If
$$
δ(e) = x \, e + y\, f + z \, h \sands δ(f) = u \, e  + v\, f + w \, h,
$$
for some scalars $\ x, y, z, u, v, w, \ {}$ then
$$\eqa{
δ(h) &= δ([e, f])\\
&=[ δ(e), f ] + [e, δ(f) ] \\
&= −2\,w\,e − 2\,z\,f + (x + v)h .
}
$$
Analogously,
$$
2e = [h, e] \qquad \Longrightarrow \qquad 2\, δ(e) = [δ(h), e] + [h, δ(e)]% \qquad \Longrightarrow \qquad 
$$
and hence
$$\eqa{
2(x \, e + y \, f + z \, h)
&= [−2 \, w \, e  − 2 \, z \, f + (x + v) h, e] + [h, x \, e + y \,f  + z \, h ]\\
&= 2(x + v)e + 2 \, x \, e − 2 \, y \, f + 2 \, y \, h.
}
$$
$\Longrightarrow \quad y = 0 = x + v.$

---

Finally, 
$$
-2 \, f = [h, f] \qquad \Longrightarrow \qquad \ u = 0.
$$
Hence
$$\eqa{
δ(e) &= x \, e + z \, h\\
&= \smallfrac x 2 \, [h, e] - z \, [f, e] \\ \\
δ(f) &=w \, h − x\, f \\
&= w \, [e, f] + \smallfrac x 2 \, [h, f]  \\ \\
δ(h) &= −2\,w\, e − 2\,z\,f \\
&= w \, [e, h] - z\, [f, h].
}
$$
$~$
$$
\Longrightarrow \qquad \qquad \qquad \qquad \qquad δ = w \, \ad_e − z \, \ad_f +  \smallfrac x 2 \, \ad_h.\qquad \qquad \qquad \qquad \qquad
$$
Hence $\ \text{Der}(sl(2, \C)) \approx sl(2, \C)$.

---

***Claim:*** $\fg$ semisimple $\quad \Longrightarrow \quad \derg \approx \fg$.
$~$
*Verify:* The Cartan criterion for semisimple algebras $\quad \Longrightarrow \quad {}$ the Killing form $\ \kappa_{\fg}\ {}$ of $\fg$ is non-degenerate.
$~$
$\ \kappa_{\fg}\ {}$ equals the restriction to $\ \ad(\fg)\ {}$ of the invariant bilinear form
$$
B(δ_1,δ_2) = \tr(δ_1δ_2)
$$
on $\derg$.
$~$
Define 
$$
\setdef {I} δ \derg {B(δ, \ad_\xi) = 0 \quad \forall \ \xi ∈ \fg}.
$$

Non-degeneracy of $\ \kappa_{\fg}\quad \Longrightarrow$
$$
I ∩ \ad(\fg) = \triv.
$$

---

We showed that $\ \ad(\fg) \ {}$ is an ideal of $\ \derg\ {}$; hence $\ I \ {}$ is an ideal, and
$$
[I, \ad(\fg)] \subseteq I ∩ \ad(\fg) = \triv.
$$
$~$
$δ \in I \quad \Longrightarrow$
$$
0 = [δ, \ad_\xi] = \ad_{δ(\xi)} \qquad \forall \ \xi \in \fg.
$$
$~$
Semisimplicity of $\fg \quad \Longrightarrow \quad \fz(\fg) = \triv \quad \Longrightarrow \quad  \ad: \fg \to \text{Der}(\fg) \ {}$ is injective, so
$$
\ad_{δ(\xi)} = 0  \quad \forall \ \xi \in \fg \qquad \Longrightarrow \qquad δ = 0.
$$

Hence $I = \triv$
.
We don’t know that $B$ is nondegenerate on $\derg$, so we can't immediately  conclude that $\derg = \ad(\fg)$.

We need to use the nondegeneracy of $\kappa_\fg$.

---

Given $\ δ ∈ \derg, \quad \exists! \ \xi \in \fg$ satisfying
$$
B(δ, \ad_\eta) = K_\fg(\xi, \eta) \qquad \forall \eta \in \fg.
$$
Hence
$$\eqa{
B(δ− \ad_\xi, \ad_\eta)&= B(δ, \ad_\eta) - B(\ad_\xi, \ad_\eta) \\
&= B(δ, \ad_\eta) - \kappa_\fg(\xi, \eta) \\
&= 0.
}
$$
Hence
$$
δ− \ad_\xi \in I = \triv, \qquad \text{so} \qquad δ = \ad_\xi,
$$
and $\ \ad: \fg → \derg\ {}$ is an isomorphism.
$~$
***Consequence:*** $\fg$ semisimple $\quad \Longrightarrow \quad \fg\ {}$ is the Lie algebra of $\ \text{Aut}(\fg)$.

---

### $\ \exists \ {}$ compact group with Lie algebra $\fg$
(not covered during lecture&mdash;was going to be an informal in-class/on Zoom activity)
$~$
We showed earlier today that $\ \text{Aut}(\fg)\ {}$ is a closed Lie subgroup of $\ GL(\fg)$. 

Let $G$ be a connected Lie group with algebra $\fg$. 
(Lie's Theorems guarantee such a $G$ exists.)

$\ \Ad(G)\ {}$ is the connected component of $\ \text{Aut}(\fg)\ {}$ containing the identity.

$$\eqa{
\Ad_g(\ad_\xi(\eta)) &= \Ad_g([\xi, \eta]) \\
&= [\Ad_g(\xi), \Ad_g(\eta)]) \\
&= \ad_{\Ad_g(\xi)}(\Ad_g(\eta))
}
$$
$\forall \ \xi, \eta \in \fg$, i.e. 
$$
\ad_{\Ad_g(\xi)}\, \Ad_g  = \Ad_g \,\ad_\xi. 
$$

---

Hence
$$
\ad_{\Ad_g(\xi)}  = \Ad_g \, \ad_\xi \, \Ad_{g^{-1}}
$$ 
and
$$\eqa{
\kappa_\fg(\Ad_g(\xi), \Ad_g(\eta)) &= \tr(\ad_{\Ad_g(\xi)}\, \ad_{\Ad_g(\eta)}) \\
&= \tr(\Ad_g \,\ad_\xi \,\Ad_{g^{-1}} \,\Ad_g \,\ad_\eta\, \Ad_{g^{-1}}) \\
&= \tr (\ad_\xi \,\ad_\eta) \\
&= \kappa_\fg(\xi, \eta),
}
$$
so $\kappa_\fg$ is invariant w.r.t. inner automorphisms $\ \Ad_g, \ g \in G. \ {}$

Negative-definiteness of $\ \kappa_\fg \ \Longrightarrow \ - \kappa_\fg\ {}$ is an $\Ad(G)$-invariant inner product on $\fg,\ {}$ so 
$$
\Ad(G) \subseteq O(\fg),
$$
the group of orthogonal transformations of $\fg$. 

Since $\ \text{Aut}(\fg)\ {}$ is closed in $\ GL(\fg), \ {}$ and $\ \Ad(G) \, {}$ is a  connected component of $\, \text{Aut}(\fg),$ compactness of $\ \Ad(G)\ {}$ follows from that of $\ O(\fg) \ {}$ (shown on the next slide). 

---

A choice of orthonormal basis for $\fg$ determines an isomorphism of $\ O(\fg)\ {}$ with $\ O(n, \R), \ {}$ where $n = \text{dim} \, \fg$.
$~$
*Recap (?):* $\ O(n, \R), \ {}$ is compact.

$O(n, \R)\ {}$ is the preimage of $\ \idm_{\!n}\ {}$ w.r.t. continuous map $\ A \mapsto A^TA, \ {}$ 
$\Longrightarrow \ O(n, \R)\ {}$ is closed.

$A \in O(n, \R) \ {}$ satisfies 
$$\eqa{|A|^2 &= \textstyle{\sum_{j, k = 1}^\ell } a_{jk}^2 \\
&= \tr{A^T A} \\
&= \tr(\idm_{\!n}) \\
&= n,
}
$$
where $|A|$ is the usual norm on $\ gl(n, \R) \approx \R^{n \times n}$, so $\ O(n, \R)\ {}$ is bounded, 
$\Longrightarrow \ O(n, \R)\ {}$ is  compact. 


