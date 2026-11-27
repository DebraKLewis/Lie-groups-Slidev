<!--
## $\mathfrak{g}$ semisimple $\ \ \Longrightarrow \ \ \exists \ {}$ compact group with Lie algebra $\mathfrak{g}$

We've showed that 
- $\ \ \fg$ semisimple $\quad \Longrightarrow \quad \fg\ {}$ is the Lie algebra of $\ \text{Aut}(\fg)$

- $\ \ \text{Aut}(\fg)\ {}$ is a closed Lie subgroup of $\ GL(\fg)$. 

Lie's Theorems guarantee existence of a connected Lie group $G$ with algebra $\fg$.

$\Ad(G)\ {}$ is the connected component of $\ \text{Aut}(\fg)\ {}$ containing the identity so it suffices to show that $\Ad(G)$ is compact.

***Claim:*** $\kappa_\fg$ is invariant w.r.t. inner automorphisms $\ \Ad_g, \ g \in G. \ {}$

---

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

Equivalently, 
$$\ad_{\Ad_g(\xi)}  = \Ad_g \, \ad_\xi \, \Ad_{g^{-1}}, \ {}$$ 
and hence
$$\eqa{
\kappa_\fg(\Ad_g(\xi), \Ad_g(\eta)) &= \tr(\ad_{\Ad_g(\xi)}\, \ad_{\Ad_g(\eta)}) \\
&= \tr(\Ad_g \,\ad_\xi \,\Ad_{g^{-1}} \,\Ad_g \,\ad_\eta\, \Ad_{g^{-1}}) \\
%&= \tr (\ad_\xi \,\ad_\eta) \\
&= \kappa_\fg(\xi, \eta).
}
$$

---

Negative-definiteness of $\ \kappa_\fg \ \Longrightarrow \ - \kappa_\fg\ {}$ is an $\Ad(G)$-invariant inner product on $\fg,\ {}$ so 
$$
\Ad(G) \subseteq O(\fg),
$$
the group of orthogonal transformations of $\fg$. 

Since $\ \text{Aut}(\fg)\ {}$ is closed in $\ GL(\fg), \ {}$ and $\ \Ad(G) \, {}$ is a  connected component of $\, \text{Aut}(\fg),$ compactness of $\ \Ad(G)\ {}$ follows from that of $\ O(\fg). \ {}$ 


---

*Sidebar:* $O(\fg)$ is compact.

A choice of orthonormal basis for $\fg$ determines an isomorphism of $\ O(\fg)\ {}$ with $\ O(n, \R), \ {}$ where $n = \text{dim} \, \fg$.

$O(n, \R)\ {}$ is the preimage of $\ \idm_{\!n}\ {}$ w.r.t. $\ A \mapsto A^TA, \ {}$  so  $O(n, \R)\ {}$ is closed.

$A \in O(n, \R) \ {}$ satisfies 
$$\eqa{|A|^2 &= \textstyle{\sum_{j, k = 1}^\ell } a_{jk}^2 \\
&= \tr{A^T A} \\
&= \tr(\idm_{\!n}) \\
&= n,
}
$$
where $|A|$ is the usual norm on $\ gl(n, \R) \approx \R^{n \times n}$, so $\ O(n, \R)\ {}$ is bounded, 
$\Longrightarrow \ O(n, \R)\ {}$ is  compact. 

---

## Generalized Jordan decomposition

Let $\fg$ be a complex semisimple Lie algebra, and $\, \xi \in \fg$.

The generalized eigenspace decomposition of $\fg$ w.r.t. $\ad_\xi$ is
$$
\fg = \oplus_{λ ∈ \Lambda(\xi)} \fg_λ,
$$
where $\ \Lambda(\xi)\ {}$ is the set of eigenvalues of $\ \ad_\xi, \ {}$ and
$$
\setdef {\fg_λ} \eta \fg {(\ad_\xi − λ \, \text{id}_\fg)^n(\eta) = 0} \quad \text{for some}\ n \in \N.
$$
$~$
***Claim***: $\lambda, \mu \in \Lambda(\xi) \ \Longrightarrow$ 
$$
[\fg_λ, \fg_µ] ⊆ \fg_{λ+µ}.
$$

*Verify:*  $\, \ad_\xi \in \derg \quad \Longrightarrow$
$$
(\ad_\xi − (λ + µ) \text{id}_\fg)[\eta, \zeta] = [\ad_\xi(\eta) − λ \, \eta, \zeta] + [\eta,\ad_\xi(\zeta) − µ \, \zeta].
$$

---

Repeated application of $\ \ad_\xi − (λ + µ) \text{id}_\fg\ {}$ yields
$$
(\ad_\xi − (λ + µ) \text{id}_\fg)^n[\eta, \zeta] 
= \sum_{k = 0}^n \begin{pmatrix}n \\ k \end{pmatrix} 
[(\ad_\xi − λ \, \text{id}_\fg)^k \eta, (\ad_\xi − µ\,\text{id}_\fg)^{n - k}\zeta].
$$

$\eta ∈ \fg_λ \ {}$ and $\ \zeta ∈ \fg_µ \ \Longrightarrow$ 
$$
(\ad_\xi − λ − µ)^n[\eta, \zeta] = 0 
\qquad \text{if} \qquad n > \text{dim} \, \fg_λ + \text{dim} \, \fg_µ,
$$
so $\ [\eta, \zeta] \in\fg_{λ+µ}$.
$~$
***Claim***: $\exists \ \xi_s, \xi_n \in \fg\ {}$ such that the semisimple and nilpotent components of the Jordan decomposition of $\,\ad_\xi \, {}$ satisfy
$$
 (\ad_\xi)_s = \ad_{\xi_s} \sands (\ad_\xi)_n = \ad_{\xi_n}.
 $$

*Verify:* Since $\ (\ad_\xi)_s \ {}$ is the diagonalizable component of $\ \ad_\xi$,
$$
(\ad_\xi)_s|_{\fg_λ}= λ \, \text{id}_{\fg_λ} \qquad \forall \ \lambda \in \Lambda(\xi). 
$$

---

Consider $\ \eta ∈ \fg_λ\ {}$ and $\ \zeta ∈ \fg_µ$.

$[\eta, \zeta] ∈ \fg_{λ+µ} \quad \Longrightarrow$
$$\eqa{
(\ad_\xi)_s([\eta, \zeta]) &= (λ + µ) [\eta, \zeta] \\
&= [λ\,\eta, \zeta] + [\eta, µ\,\zeta] \\
&= [(\ad_\xi)_s(\eta), \zeta] + [\eta, (\ad_\xi)_s(\zeta)]
}
$$
Linearity of $\ (\ad_\xi)_s \ \Longrightarrow$ 
$$
(\ad_\xi)_s ∈ \derg = \ad(\fg).
$$
$~$
Semisimplicity of $\fg \ \Longrightarrow \ \derg = \ad(\fg).\ {}$ 
$~$
Let $\xi_s$ be such that $\ ((\ad_\xi)_s = \ad_{\xi_s}$ and set 
$$
\xi_n = \xi - \xi_s.
$$

---

Uniqueness of $\xi_s$ and $\xi_n$ follows from uniqueness of the Jordan decomposition, since
$$
%\xi_s + \xi_n = \xi_s′ + \xi_n′
\ad_{\xi_s} = (\ad_\xi)_s = \ad_{\xi_s'}
\quad \Longrightarrow \quad
\xi_s - \xi_s' \in \ker{\ad} = \fz(\fg),
$$
and semisimplicity of $\ \fg \Longrightarrow \fz(\fg) = \triv.$
$~$
Note that
$$\eqa{
  \ad_\xi(\eta) = 0 \ &\Longrightarrow \ \eta \in \fg_0 \\
 &\Longrightarrow \  (\ad_\xi)_s (\eta) = 0,
}
$$
and hence
$$
(\ad_\xi)_n (\eta) = \ad_{\xi - \xi_s}(\eta) = \ad_\xi(\eta) - (\ad_\xi)_s (\eta) = 0.
$$
$~$
The block structure of $\ad_\xi \ \Longrightarrow \ {}$
$$
\ad_{[\xi_s, \xi_n]} = [\ad_{\xi_s}, \ad_{\xi_n}] = 0, \qquad
\text{and hence} \qquad  [\xi_s, \xi_n] = 0.
$$

-->

### Toral subalgebras

A subalgebra $\ft$ of $\fg$ is *toral* if $\ft$ is Abelian and all elements of $\ft$ are semisimple. 
<Spacer size="1px"/>

***Example:*** $\fg = \mathfrak{sl}(n, \C). \ {}$  The subalgebra of diagonal traceless matrices is toral.
<Spacer size="1px"/>

***Claim***: If $\fg$ is a Lie algebra over an algebraically closed field, any subalgebra $\ft$ of $\fg$ consisting of semisimple elements is Abelian, and hence toral.

*Verify:* Let $\widetilde \ad \in \text{Der}(\ft)$ denote the restriction of $\ad$ to $\ft$.

$\xi \in \ft \ \ \Longrightarrow \ \ \widetilde \ad_\xi$ is diagonalizable. We now show that $0$ is the only eigenvalue of $\widetilde \ad_\xi$. 

If $\eta$ is an eigenvector of $\widetilde \ad_\xi$ with eigenvalue $\lambda$, 
$$
\eqa{
\widetilde \ad_\eta^2(\xi) &= - \widetilde \ad_\eta(\widetilde \ad_\xi(\eta))\\
&= - \lambda \, \widetilde \ad_\eta(\eta)  = 0.
}
$$

---

#### Second slide of proof that a subalgebra of semisimple elements is toral <br/>(for algebras over algebraically closed fields)
<Spacer size="5px"/>

$\eta$ semisimple $\quad \Longrightarrow \quad \widetilde \ad_\eta$ diagonalizable 

$\Longrightarrow \quad \exists\ {}$ eigenbasis $\{\zeta_1, \cdots, \zeta_k\}$ of $\ft$, with associated eigenvalues $\lambda_1, \ldots, \lambda_k$.

$$
\xi = \textstyle{\sum_j} c_j \, \zeta_j \qquad \Longrightarrow \qquad 0 = \widetilde \ad_\eta^2(\xi) = \textstyle{\sum_j} c_j \, \lambda_j^2 \,\zeta_j,
$$
$\Longrightarrow \quad c_j \, \lambda_j^2 = 0,  \quad j = 1, \ldots, k$

$\Longrightarrow \quad \xi \in \ker \widetilde \ad_\eta$

$\Longrightarrow \quad \eta \in \ker \widetilde \ad_\xi$.

Since $\eta$ was an arbitrary eigenvector of the diagonalizable operator $\widetilde \ad_\xi$, $\widetilde \ad_\xi = 0$.

$\Longrightarrow \ \ \ft$ is toral.


---

### Eigenspace decompositions relative to toral subalgebras $\fh$

Commuting semisimple elements can be simultaneously diagonalized. 
<Spacer size="1px"/>

Given a common eigenvector $\,\xi ∈ \fg\ {}$ for all elements of $\ad(\ft),\ \exists \ α \in \ft^*\ {}$ such that
$$
\ad_\eta(\xi) = α(\eta) \xi \qquad \forall \ \eta \in \ft,
$$
and associated subspace
$$
\fg_α := \cap_{\eta \in \ft} \text{ker}(\ad_\eta - α(\eta) \text{id}_\fg).
$$
<Spacer size="2px"/>

The eigenspace decomposition of $\fg$ with respect to a toral subalgebra $\ft$ is
$$
\fg = \oplus_{α∈\ft^*} \fg_α.
$$


---

### Properties of toral decompositions

***Claim***: If $\, \ft ⊆ \fg\ {}$ is a toral subalgebra, the decomposition
$\, \fg = \oplus_{α∈\ft^*} \fg_α\ {}$ 
satisfies
1. $[\fg_α, \fg_β] ⊆ \fg_{α+β}$.

2. $\ α + β \neq 0\ \Longrightarrow \  \fg_α\ {}$ and $\ \fg_β\ {}$ are orthogonal w.r.t. the Killing form $\kappa$ of $\fg$.

3. $\kappa\ {}$ induces nondegenerate pairings $\ \fg_α ⊗ \fg_{−α} → \C$.

4. The restriction $\ \kappa|_{\fg_0}\ {}$ is nondegenerate, and hence $\fg_0 = Z(\ft) \, {}$ is reductive.

*Verify: 1.*  Let $\xi ∈ \fg_α, \eta ∈ \fg_β, \zeta ∈ \ft. \ {}$  

$$
\eqa{
\ad_\zeta([\xi, \eta])
&= [\ad_\zeta(\xi), \eta] + [\xi, \ad_\zeta(\eta)] \phantom{\sum}\\
&= [α(\zeta) \xi, \eta] + [\xi, β(\zeta) \eta]\phantom{\sum}\\
&= (α + β)(\zeta)[\xi, \eta].
}
$$

---

#### Second slide of proof of properties of toral decompositions

*2.* $\quad α + β \neq 0 \ \Longrightarrow \ \kappa(\fg_α, \fg_β) = 0$.
Invariance of $\kappa \ \Longrightarrow$

$$
\eqa{
0 &= \kappa([\zeta, \xi], \eta) + \kappa(\xi, [\zeta, \eta])\phantom{\sum}\\
&= \kappa(α(\zeta)\xi, \eta) + \kappa(\xi, β(\zeta)\eta)\phantom{\sum}\\
&= (α + β)(\zeta) \, \kappa(\xi, \eta).
}
$$
$\ α + β \neq 0 \ \Longrightarrow \ \kappa(\xi, \eta) = 0$.

*3.* Follows from 2. and nondegeneracy of $\kappa$.

*4.*  &nbsp; 3. $\Longrightarrow \ \ \kappa|_{\fg_0}\ {}$ is nondegenerate, and nondegeneracy of a symmetric invariant bilinear form implies reductivity.

<Spacer size="5px"/>

The 'bigger' the toral subalgebra, the finer-grained the decomposition, so let's look for big toral subalgebras.

-----

### Existence of maximal toral subalgebras

***Claim***: $\ \fg$ semisimple, finite dimensional, and complex (SSFDC) $\ \Longrightarrow\ \fg\ {}$ has a maximal toral subalgebra (no uniqueness implied). 

***Heads up!*** &nbsp; Under the SSFDC hypotheses, $\ft$ is a maximal toral subalgebra $\ \ \Longleftrightarrow \ \ \ft$ is a *Cartan subalgebra* of $\fg$, i.e. a nilpotent self-normalizing subalgebra of $\fg$. 

Time permitting, we'll loop back to the proof of that equivalence, but we won't work with Cartan subalgebras outside the SSFDC context, so we can stick with maximal toral subalgebra jargon.
<!--
$$
\fh = N_\fg(\fh) =  \{ \xi \in \fg : \ad_\xi(\fh) \subseteq \fh \}.
$$
-->
<Spacer size="1px"/>

*Verify:* We first show that $\fg$  contains nonzero semisimple elements. <br/> If not,
the Jordan decomposition $\ \Longrightarrow\ {}$ every element of $\fg$ is nilpotent, i.e. $\ \ad_\xi \ {}$ is nilpotent$\quad \forall \ \xi ∈ \fg$.

[Engel’s theorem](solvable-nilpotent-algebras) $\ \ \Longrightarrow\ \ \fg\ {}$ is nilpotent, and hence solvable, so $\fg$ is not semisimple. &#9889;

Existence of nonzero semisimple elements implies that semisimple Lie algebras have nontrivial toral subalgebras.
$\fg$ finite dimensional $\ \ \Longrightarrow\ \ \exists \ {}$ of a maximal toral subalgebra.

<!-- A toral subalgebra is *maximal* if it isn't a proper subalgebra of another toral subalgebra. -->

<!--
---

### Cartan subalgebras and rank of finite-dimensional semisimple Lie algebras over $\C$

A *Cartan subalgebra* is a nilpotent subalgebra $\fh$ of $\fg$ that is self-normalizing, i.e. 

$$
\fh = N_\fg(\fh) =  \{ \xi \in \fg : \ad_\xi(\fh) \subseteq \fh \}.
$$

If $\fg$ is a finite-dimensional semisimple Lie algebras over $\C$, 
$\fh$ is a  Cartan subalgebra of $\fg \ \ \Longleftrightarrow \ \ \fh \,{}$ is a maximal toral subalgebras.
-->

---

### Properties of maximal toral subalgebras of a SSFDC Lie algebra $\fg$

*This slide needs to be filled in!*

All maximal toral subalgebras of $\fg$ are conjugate w.r.t. $\ \Ad(\fg), \ {}$ the adjoint group of $\fg$.

Hence all maximal toral subalgebras of $\fg$ have the same dimension, called the *rank* of $\fg$.

---

<!--

***Claim***: If $\ \ft ⊆ \fg\ {}$ is a maximal toral subalgebra, then $\ft$ is self-centralizing, i.e.
$$\fg_0 = \fz(\ft) = \ft.$$

$~$
*Verify*: $\quad{}$ If $\xi ∈ \fg_0\ {}$ has Jordan decomposition 

$$
\xi = \xi_s + \xi_n, \qquad \text{then} \qquad \xi_s, \xi_n \in \fg_0.
$$
$\xi_s \, {}$ semisimple $\ \Longrightarrow \ \ft ⊕ \text{span}\{\xi_s \}\ {}$ is toral.

Maximality of $\, \ft \ \Longrightarrow \ \xi_s ∈ \ft$.

$\xi_s \in \ft \quad \Longrightarrow \quad \ad_\xi|_{\fg_0} = \ad_{\xi_n}|_{\fg_0}$ is nilpotent. 

Engel's theorem $\ \Longrightarrow \ \fg_0\, {}$ is nilpotent. 

If we consider $\fg$ as a representation of $\fg_0$, the Killing form of $\fg_0$ is the restriction of the Killing form of $\fg$ to $\fg_0$, and is non-degenerate, so $\fg_0$ is reductive.

---

$\fg_0$ nilpotent and reductive $\ \Longrightarrow \ {}$ $\fg_0$ is abelian.

NTS that all elements of $\, \fg_0\, {}$ are semisimple.

Consider $\xi, \eta \in \fg_0. \ {}$ 

$\ad_{\xi_n} \, {}$ and $\, \fg_0\, {}$ abelian $\ \Longrightarrow\  \ad_{\xi_n} \, \ad_\eta\, {}$ is nilpotent:
$$
( \ad_{\xi_n})^k = 0 \quad\Longrightarrow \quad (\ad_{\xi_n} \, \ad_\eta)^k
= (\ad_\eta)^k (\ad_{\xi_n} )^k = 0.
$$
Hence
$$
\kappa(\xi_n, \eta) = \tr(\ad_{\xi_n} \, \ad_\eta) = 0.
$$

$\kappa|_{\fg_0}\, {}$ nondegenerate implies $\xi_n = 0, \ {}$ so $\, \xi = \xi_s$ is semisimple.

Since $\fg_0 = \fz(\ft)$ is toral, maximality of $\, \ft \ \Longrightarrow \ \fg_0 = \ft. \ {}$ 

---
routeAlias: Cartan-subalgebras
---

### Cartan subalgebras of finite-dimensional semisimple Lie algebras over $\C$

A *Cartan subalgebra* is a nilpotent subalgebra $\fh$ of $\fg$ that is self-normalizing, i.e. 

$$
\fh = N_\fg(\fh) =  \{ \xi \in \fg : \ad_\xi(\fh) \subseteq \fh \}.
$$

We'll restrict our attention to finite-dimensional semisimple Lie algebras over $\C$; 
in this context, Cartan subalgebras are the same thing as maximal toral subalgebras.

Since all maximal toral subalgebras of a semisimple Lie algebra $\fg$ are conjugate w.r.t. $\ \Ad(\fg), \ {}$ the adjoint group of $\fg$.

Hence all Cartan subalgebras of $\fg$ have the same dimension, called the *rank* of $\fg$.

<Spacer size="5px"/>

***Examples***: 
- $\fg = \mathfrak{sl}(n, \C), \ \ft = {}$ traceless diagonal matrices.

- $Z(\text{span} \{\zeta\}) \subseteq \fg,\ {}$ where $\zeta$ is a semisimple element of $\fg$  with distinct eigenvalues

***Example***: $\quad \mathfrak{sl}(n, \C)\ {}$ has rank $n - 1, \ {}$ since the subalgebra of traceless diagonal matrices is a Cartan subalgebra of $\ \mathfrak{sl}(n, \C)$.

-->

### Roots and root spaces of a SSFDC Lie algebra $\fg$

A *root* $\alpha$ of a maximal toral subalgebra $\ft$ of $\fg$ is a nonzero element of $\, \ft^*\, {}$ with nontrivial *root space* 
$$
\fg_\alpha := \cap_{\zeta \in \fh} \ker \, S_\alpha(\zeta), \qquad \text{where} \qquad S_\alpha(\zeta) := \ad_\zeta -  \alpha(\zeta) \idm_{\!\fg}.
%\setdef{\fg_\alpha} \xi \fg {\ad_\zeta(\xi) = \alpha(\zeta) \, \xi \ \ \forall \ \zeta \in \ft}.
$$
<Spacer size="5px"/>

If $\Phi$ denotes the set of roots of $\fg$ w.r.t. $\ft$, the *root space decomposition of $\fg$ w.r.t. $\ft$* is 
$$
\fg = \ft \oplus \bigoplus_{\alpha \in \Phi} \fg_\alpha.
$$

The set $\Phi$ of all roots forms the *root system*.

***Claim:***  
- $\text{span}\, \Phi = \ft^*$ 

- $\alpha \in \Phi \quad \Longrightarrow \quad - \alpha \in \Phi$.

---

#### Proof of root system properties

$\ \ \alpha(\zeta) = 0  \quad \Longrightarrow \quad S_\alpha(\zeta) = \ad_\zeta \quad \Longrightarrow \quad \ad_\zeta(\fg_\alpha) = \{0 \}$.

Since $\fg = \ft \oplus \bigoplus_{\alpha \in \Phi} \fg_\alpha \ {}$ and $\ft$ is Abelian, 

$\alpha(\zeta) = 0 \quad \forall \ \alpha \in \Phi \quad \Longrightarrow \quad \ad_\zeta = 0 \quad \Longrightarrow \quad \zeta = 0$.

Nondegeneracy of $\kappa$ and orthogonality w.r.t. $\kappa$ of $\fg_\alpha$ and $\fg_\beta$ for $\alpha + \beta \neq 0$ imply 
$- \alpha \in \Phi$ if $\alpha \in \Phi$.
<Spacer size="5px"/>

The root space decomposition reveals subalgebras of $\fg$ isomorphic to $\mathfrak{sl}(2, \C)$.

Non-degeneracy of $\kappa|_\ft \ \ \Longrightarrow \ \ {}$ we can define $\phantom{|}^\sharp: \Phi \to \ft\ {}$ by
$$
\kappa(\alpha^\sharp, \zeta) = \alpha(\zeta) \qquad \qquad \forall \ \zeta \in \ft,
$$
analogous to our previous use of $\phantom{|}^\sharp$ in the context of symplectic structures.

---

### Existence of subalgebras isomorphic to $\mathfrak{sl}(2, \C)$

***Claim:***

1. $\alpha \in \Phi$, $\eta \in \fg_\alpha$, $\zeta \in \fg_{-\alpha} \ \ \Longrightarrow$
$$
[\eta, \zeta] = \kappa(\eta, \zeta) \alpha^\sharp. \phantom{X_{\int_\int}}
$$

2. $\alpha(\alpha^\sharp) \neq 0 \qquad \forall \ \alpha \in \Phi$

3. Given $\alpha \in \Phi$ and $\eta \in \fg_\alpha, \ \ \exists \ \ \zeta \in \fg_{-\alpha}\ {}$ such that 
$$
[\eta, \zeta] = \kappa(\eta, \zeta) \alpha^\sharp = \frac 2 {\alpha(\alpha^\sharp)} \alpha^\sharp.
$$ 

4. $\eta, \zeta$ as above and $[\eta, \zeta]$ determine a three-dimensional simple subalgebra of $\fg$ isomorphic to $\mathfrak{sl}(2, \C)$:
$$
\eta \mapsto \esl, \qquad \zeta \mapsto \fsl, \sands [\eta, \zeta] \mapsto \hsl.
$$

---

#### Proof of 1. in the existence of subalgebras isomorphic to $\mathfrak{sl}(2, \C)$
<Spacer size="5px"/>

Given $\xi \in \ft$, $\eta \in \fg_\alpha$, and $\zeta \in \fg_{-\alpha}$, 
$$
\kappa(\xi, [\eta, \zeta] - \kappa(\eta, \zeta) \alpha^\sharp) =
\kappa(\underbrace{[\xi, \eta]}_{\alpha(\xi)\eta}, \zeta) - \kappa(\eta, \zeta) \underbrace{\kappa(\xi,  \alpha^\sharp)}_{\alpha(\xi)} 
= 0
$$
$\Longrightarrow \ \ \ft$ is orthogonal to $[\eta, \zeta] - \kappa(\eta, \zeta) \alpha^\sharp$.
<Spacer size="5px"/>

$$ \zeta \in \fg_{-\alpha} \quad \Longrightarrow \quad [\eta, \zeta] \in \fg_0 = \fh,\phantom{X^\int_\int}$$ 

so nondegeneracy of $\kappa|_\ft \quad \Longrightarrow \quad [\eta, \zeta] - \kappa(\eta, \zeta) \alpha^\sharp = 0$.
<Spacer size="5px"/>

Nondegeneracy of $\kappa$ and orthogonality of root spaces other than $\fg_{-\alpha}$ to $\fg_\alpha$
$\ \ \Longrightarrow \ \ \exists \ \zeta \in \fg_\alpha$ satisfying
$$
\kappa(\eta, \zeta) = 1, \qquad \text{and hence} \qquad [\eta, \zeta] = \alpha^\sharp.
$$

---

#### Proof of 2. in the existence of subalgebras isomorphic to $\mathfrak{sl}(2, \C)$
<Spacer size="5px"/>

Assume that $\alpha \neq 0$ and $\alpha(\alpha^\sharp) = 0$.

$\eta \in \fg_\alpha$ and $\zeta \in \fg_{-\alpha} \quad \Longrightarrow$
$$
\ad_{\alpha^\sharp}(\eta) = 0 = \ad_{\alpha^\sharp}(\zeta),
$$
so $\eta, \zeta, \alpha^\sharp$ form a solvable Lie algebra. 

Lie's Theorem $\ \ \Longrightarrow \ \ \exists \ {}$ basis of this algebra w.r.t. infinitesimal adjoint actions are all upper triangular.

$$
\ad_{\alpha^\sharp} = \ad_{[\eta, \zeta]} = [\ad_\eta, \ad_\zeta]
$$
has a strictly upper triangular matrix representation w.r.t. this basis, so $\ad_{\alpha^\sharp}$ is nilpotent. 

$\alpha^\sharp \in \ft \ \ \Longrightarrow \ \ \alpha^\sharp$ is both semisimple and nilpotent, and hence equals 0, which contradicts $\alpha \neq 0$.

---

#### Proof of 3. and 4. in the existence of subalgebras isomorphic to $\mathfrak{sl}(2, \C)$
<Spacer size="5px"/>

Rescaling the $\zeta \in \fg_{-\alpha}$ used above, and retaining the name, we have
$$
\chi := [\eta, \zeta] = \frac 2 {\alpha(\alpha^\sharp)} \alpha^\sharp, \qquad \text{with} \qquad \alpha(\zeta)  = 2.
$$ 

Hence $\ad_{\chi}$ has eigenvectors $\eta, \zeta, \chi$, with eigenvalues $2, -2, 0$.

These eigenvectors determine a subalgebra $\mathfrak{sl}(2, \C)_α$ of $\fg$ isomorphic to $\mathfrak{sl}(2, \C)$.

<!--

FIX UP THE REST OF THIS!

---

$$
V = \C \, h_\alpha ⊕ \bigoplus_{k \in \Z, k \neq 0} \!\!\fg_{k\, \alpha}
$$
is an irreducible representation of $\mathfrak{sl}(2, \C)_α$, with weight decomposition
$$
V[k] = \left \{ \begin{align} 0 \ \ & \quad k \ \text{odd} \\
\fg_{k \, \alpha} & \quad k \ \text{even} \end{align} \right.
$$
$~$
$V[0] = \text{span}\{ h_\alpha \}$ is 1D, which implies $V$ is irreducible.

(See Kirillov for proof.)
$~$
$~$


---

***Claim:***  
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
Elements of $\fg_β$ have weight $\beta({h_\alpha}) = n$. 

Reminder: In $\mathfrak{sl}(2, \C), \ {}$  
- $f^n$ is an isomorphism between $V[n], \ {}$ the space of vectors of weight $n$, and $V[-n]$. 
- $e^n$ is an isomorphism between $V[-n]$ and $V[n]$. 

Case 1.  $\ \ n > 0.$  
If $\eta \in \mathfrak{sl}(2, \C)_α$ corresponds to $f$, then $\eta^n$ takes nonzero elements of $\fg_\beta$ to nonzero elements of $\fg_{\beta - n \alpha}$.

$\Longrightarrow \ W_\alpha(\beta) = β − nα \in \Phi$.

Case 2.  $\ \ n < 0.$  Use $\xi$, corresponding to $e$, in place of $\eta$.

---

***A few more facts about roots***

(See your preferred text for proofs.)

- $α \in \Phi$ and $s \, \alpha \in \Phi \quad \Longrightarrow \quad s = \pm 1$.

- $α, β \in \Phi$ and  $β \neq ±α \quad \Longrightarrow \quad$ 
$$\bigoplus_{n \in \Z} \fg_{\beta + n \alpha}
$$
is an irreducible representation of $\mathfrak{sl}(2, \C)_α$.

- If $α,β, α+β \in \Phi$, then 
$$[\fg_α,\fg_β]= \fg_{α+β}.$$

$~$
$~$
$~$
$~$

---

### Abstract root systems

If $\bbE$ is a Euclidean space, and $R$ is a finite set of vectors in $\bbE$ satisfying

1. $\text{span}\, R = \bbE$,
2. $\alpha \in R \quad \Longrightarrow \quad s \, \alpha \in R \ \ \Longleftrightarrow \ \ s = \pm 1$,
3. for any $\alpha \in R$, reflection $W_\alpha$ in the hyperplane $\alpha^\perp$ maps $R$ to itself, and
4. for any $\alpha, \beta \in R$, 
$$
n_{\beta \alpha} := 2 \frac {\langle \beta, \alpha \rangle}{\langle \alpha, \alpha \rangle} \in {\mathbb Z},
$$
then $R$ is called an *abstract root system*.
$~$
Root spaces of complex semisimple Lie algebras are abstract root spaces. 

---

---

### Highest weight vectors

We can choose a linear functional $\ell: \fh \to \R$ that partitions the roots into *positive* and *negative* roots:
$$
\Phi = \Phi_+ \cup \Phi_-, \qquad \text{where} \qquad R_+ := \{ \alpha \in \Phi: \ell(\alpha) > 0 \}.
$$
This partition is called an *ordering of the roots*.
$~$
Let $V$ be a $\fg$-module.  An eigenvector $v \in V$ of the action of $\fh$ satisfying
$$
v \in \cap_{\alpha \in \Phi_+} \ker \rho(\alpha)
$$
is called a *highest weight vector of* $V$.
$~$
Every finite-dimensional representation $V$ of a semisimple complex Lie algebra possesses a highest weight vector.
$~$

---

For any semisimple complex Lie algebra $\fg$,
- the subspace $W$ of $V$ generated by the images of a highest weight vector v
E R- is an irreducible under successive applications of root spaces 9/1 for P
subrepresentation;
- an irreducible representation possesses a unique highest weight vector up to rescaling.
a

-->