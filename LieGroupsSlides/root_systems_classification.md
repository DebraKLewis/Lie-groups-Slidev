---
marp: true
paginate: true
---

### Recap from Tuesday: Toral subalgebras
$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fc}{\mathfrak{c}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\ft}{\mathfrak{t}}
\newcommand{\fz}{\mathfrak{z}}
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
\newcommand{\bbE}{\mathbb{E}}
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
\newcommand{\radg}{\text{rad}(\fg)}
\newcommand{\ker}{\text{ker} \, }
\newcommand{\sl}{\mathfrak{sl}(2, \C) }
\newcommand{\span}[1]{\text{span}\{#1\}}
\newcommand{\tr}{\text{trace}}
\newcommand{\derg}{\text{Der}(\fg)}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A subalgebra $\ft$ of $\fg$ is *toral* if $\ft$ is abelian and all elements of $\ft$ are semisimple. 

Commuting semisimple elements can be diagonalized simultaneously. 

$~$
A *Cartan subalgebra* is a self-normalizing nilpotent subalgebra.
$~$
In the context of finite-dimensional semisimple Lie algebras over $\C$, Cartan subalgebras are the same thing as maximal toral subalgebras.
$~$
***"Canonical" example:*** $\fg = \mathfrak{sl}(n, \C). \ {}$  

The subalgebra  $\ \ft\ {}$ of diagonal traceless matrices is toral.
$~$

---

## Roots and root spaces

A *root* $\alpha$ of a Cartan subalgebra $\fh$ of $\fg$ is a nonzero element of $\, \fh^*\, {}$ with nontrivial *root space* 
$$
\fg_\alpha := \cap_{\zeta \in \fh} \ker \, S_\alpha(\zeta), \qquad \text{where} \qquad S_\alpha(\zeta) := \ad_\zeta -  \alpha(\zeta) \idm_{\!\fg}.
%\setdef{\fg_\alpha} \xi \fg {\ad_\zeta(\xi) = \alpha(\zeta) \, \xi \ \ \forall \ \zeta \in \fh}.
$$
$~$
If $\Phi$ denotes the set of roots of $\fg$ w.r.t. $\fh$, the *root space decomposition of $\fg$ w.r.t. $\fh$* is 
$$
\fg = \fh \oplus \bigoplus_{\alpha \in \Phi} \fg_\alpha.
$$
$~$
The set $\Phi$ of all roots forms the *root system*.
$~$
A partial list of properties of $\Phi$ is given on the next two slides.

---

- $\ \text{span}\, \Phi = \fh^*$ 
- $\ [\fg_α, \fg_β] ⊆ \fg_{α+β}$
- $\ α + β \neq 0\ \Longrightarrow \  \fg_α\ {}$ and $\ \fg_β\ {}$ are orthogonal w.r.t. the Killing form $\kappa$ of $\fg$
- $\ \alpha \in \Phi \quad \Longrightarrow \quad - \alpha \in \Phi$
- $\ \kappa\ {}$ induces nondegenerate pairings $\ \fg_α ⊗ \fg_{−α} → \C$
- The restriction $\ \kappa|_{\fh}\ {}$ is nondegenerate; $\fh \, {}$ is reductive
- $\ \alpha \in \Phi$, $\xi\in \fg_\alpha$, $\eta \in \fg_{-\alpha} \ \ \Longrightarrow$
$$
[\xi, \eta] = \kappa(\xi, \eta) \alpha^\sharp, \phantom{X_{\int_\int}}
$$
$\qquad{}$where $\ \kappa(\alpha^\sharp, \zeta) = \alpha(\zeta) \quad \forall \ \zeta \in \fh$
- $\ \ \alpha(\alpha^\sharp) \neq 0 \qquad \forall \ \alpha \in \Phi$

---

Given $\alpha \in \Phi$ and $\xi \in \fg_\alpha, \ \ \exists \ \ \eta \in \fg_{-\alpha}\ {}$ such that 
$$h_\alpha := [\xi, \eta] = \kappa(\xi, \eta) \alpha^\sharp = \frac 2 {\alpha(\alpha^\sharp)} \alpha^\sharp.$$
$~$
$\ \xi, \eta, h_\alpha$ determine a 3D simple subalgebra of $\fg$ isomorphic to $\mathfrak{sl}(2, \C)$, with
$$
\xi \mapsto e = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \qquad \eta \mapsto f = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix} , \sands h_\alpha \mapsto h = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix},
$$
and
$$
[e,f] = h, \qquad [h,e] = 2e, \sands [h,f] = −2f.
$$
$~$
*End of Tuesday recap*


---

### Recap from earlier this quarter: Irreducible representations of $\fg = \mathfrak{sl}(2, \mathbb{C})$

$\fg$-modules are completely reducible, so it suffices to consider the irreducible submodules.
$~$
Given a $\fg$-module $V$, let $\Lambda_V$ denote the set of eigenvalues of $\rho(h)$.

Elements of $\Lambda_V$ are called *weights*.
$~$
Given $λ \in \Lambda_V$, let $V[λ] ⊂ V$ denote the eigenspace of $λ$.
$~$

If $V$ is a finite-dimensional $\fg$-module, then
$$
V= \oplus_{λ \in \Lambda_V} V[λ] .
$$
$~$
This decomposition is called the *weight decomposition of* $V$.
$~$
$~$
$~$
$~$

---

A *highest weight of* $V$ is a weight $\tilde λ$ satisfying
$$\text{re} \, \tilde λ = \textstyle{\max_{λ \in \Lambda_V}} \ \text{re} \, λ. 
$$ 
$~$
A vector in $V[λ]$ is called a *vector of weight* $λ$. 
$~$
If $\lambda$ is a highest weight, then vectors in $V[λ]$ are *highest weight vectors*.
$~$
$~$
$~$
$~$
$~$
$~$

---

***Very important example:*** $\ V = (\fg, \ad)$ 

$\ad_h$ has eigenvalues $-2, 0, 2$, with associated eigenspaces
$$\eqa{
\fg[-2] &= \span f,\phantom{X_{\int_\int}} \\
\fg[0] &= \span h, \phantom{X_{\int_\int}}\\
\fg[2] &= \span e.\phantom{X_{\int_\int}}
}
$$

$\Lambda_{(\fg, \ad)} = \{-2, 0, 2 \}, \ {}$ the highest weight is $2$, and the highest weight vectors are rescalings of $e$. 

If $v$ is a vector of weight $λ \ {}$ of a $\fg$-module $V, \ {}$ then
$$\eqa{
(he) \cdot v &= ([h, e] + e h) \cdot v \\
&= 2e \cdot v + e \cdot (λv)\\
&= (λ + 2)e \cdot v
}$$

---

and
$$\eqa{
(hf) \cdot v &= ([h, f] + f h) \cdot v \\
&= - 2f \cdot v + f \cdot (λv)\\
&= (λ - 2)f  \cdot v
}$$
$\Longrightarrow$
$$
e \cdot V[λ] ⊂ V [λ + 2] 
\sands
f \cdot V [λ] ⊂ V [λ − 2].
$$

$~$
Let $v ∈ V[λ]$ be a highest weight vector, and define
$$
v^k : = \frac {f^k}{k!} \cdot v \qquad \quad k≥0.
$$
$~$


---

- $f \cdot v^k = (k + 1)v^{k+1}$
- $h \cdot v^k =(λ−2k)v^k$
- $e \cdot v = 0, \ {}$ and $\ e \cdot v^k =(λ−k+1)v^{k−1} \qquad \quad \forall \ k >0$.

$~$

A finite-dimensional complex $\mathfrak{sl}(2, \C)$-module has a weight decomposition with integer weights:
$$
V= \bigoplus_{n∈\Z} V[n].
$$ 
The maps 
$$e^n : V [n] → V [−n] \sands f^n : V [−n] → V [n]
$$ 
are isomorphisms.

---

### Constructing irreducible $\fg$-modules with highest weight $n \in \N$

We can use these relationships to construct a family of irreducible $\fg$-modules. 
$~$
Given $n \in \N$, let $V_n$ denote the vector space with basis $\{ v^0, v^1, \ldots, v^n \}$, and define an action of $\fg$ on $V$ by
$$\eqa{
h \cdot v^k & =(n−2k) v^k \\
f \cdot v^k &=(k+1)v^{k+1} \qquad 0 \leq k<n \\ 
f \cdot v^n &=0 = e \cdot v^0\\
e \cdot v^k &= (n+1−k)v^{k−1} \qquad 0 < k \leq n.
}
$$
$~$
This action makes $V_n$ an irreducible $\fg$-module with highest weight $n$.
$~$
$~$

---

### Back to the general setting: $\fg$-modules of semisimple complex Lie algebras

We can apply these constructions and results to the subalgebras $\mathfrak{sl}(2, \C)_α$.

$$
V = \C \, h_\alpha ⊕ \bigoplus_{k \in \Z, k \neq 0} \!\!\fg_{k\, \alpha} \phantom{|^{\int^\int}_{\int_\int}}
$$
is an irreducible representation of $\mathfrak{sl}(2, \C)_α$, with weight decomposition
$$
V[k] = \left \{ \begin{align} 0 \ \ & \quad k \ \text{odd} \\
\fg_{k \, \alpha} & \quad k \ \text{even} \end{align} \right. \phantom{|_{\int_\int}}
$$
$~$
$V[0] = \text{span}\{ h_\alpha \}$ is 1D, so $V$ is irreducible. 

(See, e.g., Kirillov for proof.)
$~$

---

***More root relationships:***  
- $\ \ \alpha, \beta \in \Phi \quad \Longrightarrow \quad \beta(h_\alpha) \in \Z$.

- $\ \ W_\alpha: \fh^* \to \fh^*$ given by
$$
W_\alpha(\mu) := \mu - 2 \, \mu(h_\alpha) \alpha
$$
$\qquad{}$ is a reflection, and takes roots to roots.

In particular, $\alpha \in \Phi \quad \Longrightarrow \quad - \alpha = W_\alpha(\alpha) \in \Phi$.

$~$
*Verify:* $\fg$ is a representation of $\mathfrak{sl}(2, \C)_α$.

$$\xi \in \fg_\beta \quad \Longrightarrow \quad \ad_{h_\alpha}(\xi) = \beta({h_\alpha}) \xi,$$
so $\beta({h_\alpha})$ is a weight (AKA eigenvalue) of $\ad_{h_\alpha}$.

---

The weights of finite dimensional $\mathfrak{sl}(2, \C)$-modules are integers.
$~$
Elements of $\fg_β$ have weight $n = \beta({h_\alpha})$. 
$~$
Case 1.  $\ \ n > 0.$ 

$f^n$ acts as an isomorphism between $V[n], \ {}$ the space of vectors of weight $n$, to $V[-n]$, so if  $\eta \in \mathfrak{sl}(2, \C)_α$ 
corresponds to $f$, then $\eta^n$ takes nonzero elements of $\fg_\beta$ to nonzero elements of $\fg_{\beta - n \alpha}$.

$\Longrightarrow \ \phi_\alpha(\beta) = β − nα \in \Phi$.

Case 2.  $\ \ n < 0.$ 

$e^{-n}$ maps $V[-n]$ to $V[n]$;  use $\xi$, corresponding to $e$, in place of $\eta$.
$~$
$~$

---

***Two more facts about roots***

- $α \in \Phi$ and $s \, \alpha \in \Phi \quad \Longrightarrow \quad s = \pm 1$.

- $α, β \in \Phi$ and  $β \neq ±α \quad \Longrightarrow \quad$ 
$$\bigoplus_{n \in \Z} \fg_{\beta + n \alpha}
$$
$\qquad{}$is an irreducible representation of $\mathfrak{sl}(2, \C)_α$.
$~$
*Verify first claim (sketchy):*

A few slides back, we defined the irreducible representation
$$
V = \C \, h_\alpha ⊕ \bigoplus_{k \in \Z, k \neq 0} \!\!\fg_{k\, \alpha}. \phantom{|^{\int^\int}_{\int_\int}}
$$

---

$$
V[2] = \fg_α = \C\ \xi, 
$$
where $\xi \in \mathfrak{sl}(2, \C)_α$ corresponds to $e \in \mathfrak{sl}(2, \C)$. 

$\Longrightarrow \quad \ad_\xi : \fg_α → \fg_{2α}\ {}$ is zero. 
$~$
In an  irreducible representation, $\ker\ e$ is the highest weight subspace, so the highest weight of $V$ is $2$.

Hence
$$
V = \fg_{−α} ⊕ \C \, h_α ⊕ \fg_α, 
$$
so the only integer multiples of α that are roots are $±α$. 
$~$
(See your preferred text for complete proofs.)

$~$
$~$
$~$
$~$
$~$

---

### Abstract root systems

If $\bbE$ is a Euclidean space, and $R$ is a finite set of vectors in $\bbE$ satisfying

1. $\text{span}\, R = \bbE$,
2. $\alpha \in R \quad \Longrightarrow \quad s \, \alpha \in R \ \ \Longleftrightarrow \ \ s = \pm 1$,
3. for any $\alpha \in R$, reflection $\phi_\alpha$ in the hyperplane $\alpha^\perp$ maps $R$ to itself, and
4. for any $\alpha, \beta \in R$, 
$$
n_{\beta \alpha} := 2 \frac {\langle \beta, \alpha \rangle}{\langle \alpha, \alpha \rangle} \in {\mathbb Z},
$$
then $R$ is called an *abstract root system*.
$~$
Root spaces of complex semisimple Lie algebras are abstract root spaces. 

---

***Classical semisimple complex algebras***

$A_n : \ \ \mathfrak {sl}(n+1, \C)$
$B_n : \ \ \mathfrak {so}(2 \, n+1, \C)$
$C_n : \ \ \mathfrak {sp}(2 \, n, \C)$
$D_n : \ \ \mathfrak {so}(2 \, n, \C), n > 1\phantom{X_{\int_\int}}$

***Combining root systems***

If $R_1 ⊂ E_1$ and $R_2 ⊂ E_2$ are two root systems, then 
$$
R = R_1 ⊔R_2 ⊂ E_1 ⊕E_2, 
$$
with inner product on $E_1 ⊕E_2$ such that $E_1$ and $E_2$ are orthogonal, is a root system.

A root system $R$ is called *reducible* if it can be written in the form $R = R_1 ⊔ R_2$, with $R_1 ⊥ R_2$. Otherwise, $R$ is called *irreducible*.


---

![bg right:60% h:600](Images/rank2rootSystems.png)

***Rank 2 possibilities***
$~$
 $$
\begin{array}{cccc}
n_{αβ} & n_{βα} & \frac {|α|^2}{|β|^2} & \varphi \\
% \hline \\
0 & 0 & \qquad &  \frac π 2\\ 
%\hline \\
1 & 1 &  1& \frac {π} 3  \\  
-1 &  −1 & 1&  \frac {2π} 3  \\
% \hline \\
2 & 1 & 2 & \frac {π} 4  \\ 
−2 &  −1 & 2  & \frac {3 π} 4  \\ 
 %\hline \\
3 & 1 & 3 & \frac {5 π} 6  \\ 
- 3 &  −1 & 3 & \frac {π} 6  
% \hline \\
\end{array}
$$

---

![bg right:40% w:400](Images/positiveandSimpleRoots.png)

### Positive roots

Since the negative of a root must also be a root, we can compress our bookkeeping:

We can choose a linear functional $\ell: \fh \to \R$ that partitions the roots into *positive* and *negative* roots:
$$
R = R_+ \cup R_-, 
$$
where
$$
 R_+ := \{ \alpha \in R: \ell(\alpha) > 0 \}. \phantom{X_{\int_\int}}
$$

This partition is called an *ordering of the roots*, or *polarization*.

----

### The Weyl group

The *Weyl group* $W$ is the finite subgroup of the orthogonal group $O(\bbE)$ generated by the reflections $\phi_\alpha, \alpha \in R$.

The root system $R$ is invariant under the action of $W$.

For any $w∈W$ and $α∈R,\ {}$ 
$$
\phi_{w(α)} =w\, \phi_α\, w^{−1}.
$$

*Verify:* Since reflections are orthogonal, $W ⊂ O(\bbE)$. 

$\text{span}\, R = \bbE \quad \Longrightarrow \quad{}$ the identity element in the group generated by the $\phi_\alpha$'s must be the identity element of $O(\bbE)$, so $W$ is a subgroup of $O(\bbE)$.

$R$ finite $\quad \Longrightarrow \quad \text{Aut}(R)\ {}$ finite $\quad \Longrightarrow \quad W \ {}$ finite.

The last assertion is a reflection thing.

---

![bg right:40% w:400](Images/WeylChamberA2.png)

### Weyl chambers

A Weyl chamber is a connected component of 
$$
\bbE\backslash \lp  \cup_{\alpha \in R} \, \alpha^\perp \rp. 
$$

The Weyl group acts transitively on the set of Weyl chambers.
$~$
$$
C \mapsto \{α∈R : \langle α, v \rangle>0, v∈C \}
$$
and
$$
R_+ \mapsto \{ v∈ \bbE : \langle α, v \rangle >0 \quad \forall \ α∈R_+\}
$$
is a bijection between polarizations and Weyl chambers.

---

The Weyl chamber determined by $R_+$ is called the *positive Weyl chamber* 
(w.r.t. the polarization $R = R_+ \cup R_-$).
$~$

If $C$ and $\tilde C$ are adjacent Weyl chambers separated by the hyperplane $\alpha^\perp, \ {}$ 
$$\phi_α(C) = \tilde C.$$
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


### Simple roots and Dynkin diagrams

A root $α ∈ R^+$ is called *simple* if it can not be written as a sum of two positive roots, and .
denote the set of simple roots by $Π ⊂ R^+$. 

Every positive root can be written as a sum of simple roots.
The Weyl group is generated by reflections determined by simple roots.

If $α, β ∈ R^+$ are simple roots, then $\ \langle α, β \rangle ≤ 0$.

$~$
A *Dynkin diagram* is a graph describing the set $\Pi$ of simple roots, with one vertex for each simple root.

The number of edges encodes the angle between simple roots:  $\ \frac {2 \pi} 3$: 1, $\ \frac {3 \pi} 4$: 2, $\ \frac {5 \pi} 6$: 3.

An arrow points to the shorter root if the root length ratio is contrained and $\neq 1$.

---

***Dynkin diagrams of the classical semisimple complex algebras***

- $A_n : \ \ \mathfrak {sl}(n+1, \C)$

- $B_n : \ \ \mathfrak {so}(2 \, n+1, \C)$

- $C_n : \ \ \mathfrak {sp}(2 \, n, \C)$

- $D_n : \ \ \mathfrak {so}(2 \, n, \C), n > 1\phantom{X_{\int_\int}}$


![h:200](Images/blankSpace.png)![h:200](Images/blankSpace.png)![h:275](Images/classicalDynkinDiagrams.png)


---

***Some isomorphic algebras***


$A_{1} ≃  B_{1} ≃  C_{1}, \qquad{}$ i.e. $\quad \ \mathfrak {sl}(2, \C) ≃  \mathfrak {so}(3, \C) ≃ \mathfrak {sp}(1, \C)$

$B_{2}≃ C_{2}, \qquad \qquad \ \ {}$ i.e. $\quad \ \mathfrak {so}(5, \C) ≃ \mathfrak {sp}(2, \C)$

$D_{2}≃ A_{1}\times A_{1}, \qquad{}$ i.e. $\quad \ \mathfrak {so}(4, \C) ≃  \mathfrak {sl}(2, \C) \times \mathfrak {sl}(2, \C)$

$D_{3}≃ A_{3}, \qquad\qquad \ \ {}$ i.e. $\quad \ \mathfrak {so}(6, \C) ≃  \mathfrak {so}(4, \C)$

$~$
$~$
$~$

---

The *exceptional Lie algebras* are five complex simple Lie algebras whose Dynkin diagrams are not those of any classical Lie algebra.

![h:280](Images/blankSpace.png)![h:380](Images/blankSpace.png)![h:450](Images/exceptionalDynkinDiagrams.png)

